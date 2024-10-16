export const VideoBackground = () => {
    return (	
             
        <div className="video-background">
        <video autoPlay loop muted>
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>
        <div className="overlay" />
        </div>
      
    )	
}