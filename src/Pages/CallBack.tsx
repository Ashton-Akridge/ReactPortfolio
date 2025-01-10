import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import gsap from 'gsap'; // Import GSAP for animation

// Define your Spotify API credentials
const client_id = '42ef595d361c46b89600d9ad294672d5';
const client_secret = 'a79cbb470a984ceba794050c610d34da';

// Define the expected response structure for access token
interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

// Define the structure of a track object (the track within a playlist)
interface Track {
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] }; // Add album art structure
}

// Define the response structure for the playlist tracks endpoint
interface PlaylistTracksResponse {
    items: {
        track: Track;
    }[];
}

// Function to fetch the access token from Spotify API
const getAccessToken = async (): Promise<string | null> => {
    try {
        const response = await axios.post<TokenResponse>(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
            }),
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${client_id}:${client_secret}`)}`, // Replaced Buffer with btoa
                },
            }
        );

        if (response.status === 200) {
            return response.data.access_token;
        }
        return null;
    } catch (error) {
        console.error('Error fetching token:', error);
        return null;
    }
};

// Fetch playlist top tracks
const fetchPlaylistTracks = async (playlistId: string, accessToken: string): Promise<Track[]> => {
    try {
        const response = await axios.get<PlaylistTracksResponse>(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.items.slice(0, 5).map((item) => item.track); // Return top 5 songs
    } catch (error) {
        console.error('Error fetching playlist tracks:', error);
        return [];
    }
};

export const PlaylistDisplay = ({ playlistId }: { playlistId: string }) => {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement | null>(null); // Ref to the track container for GSAP animation

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const fetchedTracks = await fetchPlaylistTracks(playlistId, accessToken);
                setTracks(fetchedTracks);
            }
        };

        fetchData();
    }, [playlistId]);

// Wrap the changeTrack function inside useCallback to prevent unnecessary recreation
    const changeTrack = useCallback(() => {
        if (trackRef.current && tracks.length > 0) {
            // Animate the current track moving left and the next track coming from the right
            gsap.to(trackRef.current, {
                x: '-1.5rem', // Move the current track to the left
                duration: 1, // Duration of the animation
                opacity: 0,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Once the current track animation is complete, update the track index
                    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);

                    // Reset the position of the track and animate the next one from the right
                    gsap.set(trackRef.current, { x: '1.5rem' });
                    gsap.to(trackRef.current, {
                        x: '0px', // Move the next track to its normal position
                        duration: 1,
                        opacity: 1,
                        ease: 'power2.inOut',
                    });
                },
            });
        }
    }, [tracks]); // Ensure changeTrack only gets re-created when tracks change

    useEffect(() => {
        const interval = setInterval(() => {
            changeTrack(); // Trigger the track change animation
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, [changeTrack]); // Only depend on changeTrack, since it is now memoized


    return (
        <div>
            {tracks.length > 0 ? (
                <div>
                    <div ref={trackRef} style={{ display: 'flex', overflow: 'hidden' }}>
                        <div className="Spotify-Playlist" style={{ flexShrink: 0, width: '20rem', transition: 'transform 1s ease' }}>
                            {/* Display the album cover */}
                            <img
                                src={tracks[currentTrackIndex].album.images[0]?.url}
                                alt={tracks[currentTrackIndex].name}
                            />
                            <p>
                                <strong>{tracks[currentTrackIndex].name}</strong> by{' '}
                                {tracks[currentTrackIndex].artists.map((artist) => artist.name).join(', ')}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
};
