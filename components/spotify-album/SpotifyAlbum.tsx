

interface SpotifyAlbumProps {
    src: string;
    style?: {
        height: string;
    };
}

export default function SpofityAlbum({ src, style }: SpotifyAlbumProps) {

    return (
        <div className="listen-playlist-container">
            <div className="listen-playlist">
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src={src}
                    width="100%"
                    height={style?.height ?? "500"}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}