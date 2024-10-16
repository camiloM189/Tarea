import { VideoBackground } from "../components/VideoBackground"
import { VideoBackGroundDesarrollo } from "../components/VideoBackGroundDesarrollo"

export const DesarrolloPage = () => {
    return (	
        <>
          <div>
            <VideoBackGroundDesarrollo/>
          </div>

          <div className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Desarrollo de sotware</h1>
          </div>
          

          <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
           
                <div>
                    <h2>¿Ques es?</h2>
                    <p className="" style={{ textAlign:"start",lineHeight: 1.5}}> es el proceso de concebir, diseñar, implementar y mantener aplicaciones y sistemas informáticos. Este campo abarca una amplia gama de actividades, herramientas y metodologías que permiten a los desarrolladores crear programas que satisfacen necesidades específicas de usuarios y empresas</p>
                </div>
                <div>
                    <img src="/desarrolloWebQueES.jpg" className="img-fluid" alt="/desarrolloWebQueES.jpg" />
                </div>
         
            
        </div>









        </>      
    )	
}