export const VideoBackGroundDesarrollo = () => {
    return (	
        <div className="video-background">
        <video autoPlay loop muted>
            <source src="/public/video2.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>
        <div className="overlay" />
        </div>	
    )	
}