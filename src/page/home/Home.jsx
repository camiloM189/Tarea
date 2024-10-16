import { Link } from "react-router-dom"
import { VideoBackground } from "../components/VideoBackground"
import { useRef } from "react";

export const Home = () => {

    const desarrolloRef = useRef(null);
    const lenguajeRef = useRef(null);
    const normasRef = useRef(null);

   
    const scrollToDesarrollo = () => {
        desarrolloRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToLenguaje = () => {
        lenguajeRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToNormas = () => {
        normasRef.current.scrollIntoView({ behavior: "smooth" });
    };





    return (	
        <> 

        <div>
            <VideoBackground/>
        </div>
        
        <div className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Introducción al Desarrollo de Software</h1>
            <p>Conceptos, Lenguajes y Normas</p>
        </div>

        <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
            <div style={{width:"60%"}}>
                <p className="" style={{ textAlign:"center",lineHeight: 1.5}}>A continuación, exploraremos dos temas clave que son fundamentales 
                en el desarrollo de software. Cada uno de ellos te proporcionará una 
                visión más profunda de conceptos esenciales que todo desarrollador debe conocer.
                Haz clic en las imágenes para sumergirte en cada tema.</p>
            </div>
            
        </div>

 
        {/* <section className="row g-0 mb-5 mt-5" style={{display:'flex',justifyContent:'center'}} >
     	
      

            <article className=" ms-3 mb-1" style={{cursor:'pointer',overflow:'hidden',width:"30%"}} onClick={scrollToDesarrollo}>
          
                <div className="card text-bg-dark border-0  rounded-0">
                  <img src="/desarrollo.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
                  <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                    <h5 className="card-title text-center">Desarrollo De Sotware</h5>
                  </div>
                </div>
        
            </article>	

            <article className="ms-3" style={{cursor:'pointer',overflow:'hidden',width:"30%"}} onClick={scrollToLenguaje}>
                <div className="card text-bg-dark border-0  rounded-0">
                  <img src="/lenguaje.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
                  <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                    <h5 className="card-title text-center">Lenguaje De Programacion</h5>
                  </div>
                </div>
            </article>	

    
            <article className="ms-3" style={{cursor:'pointer',overflow:'hidden',width:"30%"}} onClick={scrollToNormas}>
                <div className="card text-bg-dark border-0  rounded-0">
                  <img src="/normas.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
                  <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                    <h5 className="card-title text-center">Normas</h5>
                  </div>
                </div>
            </article>	


        </section> */}
         
        <section className="row g-0 mb-5 mt-5" style={{display:'flex',justifyContent:'center'}} >
     	
      

         <article className=" ms-3 mb-1 col-sm-12 col-6-md botones" style={{cursor:'pointer',overflow:'hidden'}} onClick={scrollToDesarrollo}>
       
             <div className="card text-bg-dark border-0  rounded-0">
               <img src="/desarrollo.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
               <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                 <h5 className="card-title text-center">Desarrollo De Sotware</h5>
               </div>
             </div>
     
         </article>	

         <article className="ms-3 col-sm-12 col-6-md botones" style={{cursor:'pointer',overflow:'hidden'}} onClick={scrollToLenguaje}>
             <div className="card text-bg-dark border-0  rounded-0">
               <img src="/lenguaje.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
               <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                 <h5 className="card-title text-center">Lenguaje De Programacion</h5>
               </div>
             </div>
         </article>	

 
         <article className="ms-3 col-sm-12 col-6-md botones" style={{cursor:'pointer',overflow:'hidden'}} onClick={scrollToNormas}>
             <div className="card text-bg-dark border-0  rounded-0">
               <img src="/normas.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
               <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                 <h5 className="card-title text-center">Normas</h5>
               </div>
             </div>
         </article>	


     </section>
      




        <div ref={desarrolloRef} className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Desarrollo de sotware</h1>
        </div>
          


        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
           <div className="row">
                 <div  className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                 <h2 className="text-center">¿Ques es?</h2>
                 <p className="text-center" > es el proceso de concebir, diseñar, implementar y mantener aplicaciones y sistemas informáticos. Este campo abarca una amplia gama de actividades, herramientas y metodologías que permiten a los desarrolladores crear programas que satisfacen necesidades específicas de usuarios y empresas</p>
                 </div>
                 <div className="col-6">
                     <img src="/desarrolloWebQueES.jpg" className="img-fluid"  alt="/desarrolloWebQueES.jpg" />
                 </div>
             </div>
          
             
         </div>
         
            <div className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
                <h1>Etapas del Desarrollo de Software</h1>
                <p>Por Tipo, Por Licencia, Por Plataforma,Por Uso y Por Funcionalidad</p>
            </div>

         <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">
        
  
            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/Windows-11.jpg" className="img-fluid" alt="Windows-11.jpg"/>
            </div>
           
           
           
  
 
    
            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                
                <h4>Por Tipo:</h4>
                 <ul>
                     <li>Sistema: Gestores de hardware (ej. Windows)</li>
                     <li>Aplicación: Tareas específicas (ej. Word)</li>
                     <li>Desarrollo: Herramientas para programadores (ej. IDEs)</li>
                 </ul>
            </div>
          
         

           
        </div>
        </div>


        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">
        
            
            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <h4>Por Plataforma:</h4>
                 <ul>
                     <li>Escritorio: Instalado en PCs (ej. Photoshop)</li>
                     <li>Web: Ejecutado en navegadores (ej. Google Docs)</li>
                     <li>Móvil: Para dispositivos móviles (ej. WhatsApp)</li>
                 </ul>
            </div>




            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/photoshop.jpg" className="img-fluid" alt="photoshop.jpg"/>
            </div>
           


          
          
         

           
        </div>
        </div>


        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">
        
  
            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/juegos.jpg" className="img-fluid" alt="juegos.jpg"/>
            </div>
           


            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <h4>Por Uso:</h4>
                 <ul>
                     <li>Productividad: Mejora la eficiencia (ej. Trello)</li>
                     <li>Entretenimiento: Ocio (ej. videojuegos)</li>
                     <li>Educativo: Aprendizaje (ej. plataformas de cursos)</li>
                 </ul>
            </div>
          
         

           
        </div>
        </div>





        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">

            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <h4>Por Funcionalidad:</h4>
                 <ul>
                     <li>Base de Datos: Gestión de datos (ej. MySQL)</li>
                     <li>Seguridad: Protección (ej. antivirus)</li>
                 </ul>
            </div>
          
         
            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/MySQL.jpg" className="img-fluid" alt="MySQL.jpg"/>
            </div>
           
        </div>
        </div>








      

        <div ref={lenguajeRef} className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>¿Que es un lenguaje de programación?</h1>
            <p>es un conjunto de reglas y símbolos que permiten a los programadores escribir instrucciones que una computadora puede entender y ejecutar. Estos lenguajes son utilizados para desarrollar software, aplicaciones y sistemas informáticos.</p>
        </div>


        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>Los lenguajes de programación más utilizados en la actualidad</h2>

        </div>

     
        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>JavaScript</h2>
            <p>Principalmente utilizado para el desarrollo web, tanto en el lado del cliente como del servidor (con Node.js).</p>
            <img src="/javaScript.png" alt="" />
       
        </div>
        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>Java</h2>
            <p>Común en aplicaciones empresariales.</p>
            <img src="/java.png" alt="" />
       
        </div>

        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>Python</h2>
            <p>Conocido por su simplicidad y versatilidad.</p>
            <img src="/python.png" alt="" />
       
        </div>


        






        <div ref={normasRef} className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Normas de programacion</h1>
            <p>Las normas de programación, también conocidas como convenciones de codificación,
            son un conjunto de directrices que ayudan a los programadores a escribir código 
            de manera clara, consistente y eficiente.</p>
        </div>










        <div className="accordion container mb-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Nomenclatura
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Variables y funciones: Usa nombres descriptivos que reflejen la función (ej. calcularSuma en lugar de cs).</li>
            <li>Convenciones de estilo: Utiliza camelCase para variables y funciones, y PascalCase para clases.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Estructura del Código
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Indentación: Usa espacios o tabulaciones de manera consistente para mejorar la legibilidad.</li>
            <li>Separación de secciones: Organiza el código en secciones lógicas con comentarios para facilitar la navegación.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Comentarios
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Documentación: Usa comentarios para explicar el propósito de bloques de código, funciones o algoritmos complejos.</li>
            <li>Estilo de comentario: Mantén un estilo uniforme para los comentarios (ej. // para comentarios de una línea, /* ... */ para comentarios de varias líneas).</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cuarta" aria-expanded="false" aria-controls="cuarta">
        Manejo de Errores
      </button>
    </h2>
    <div id="cuarta" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Validación de entradas: Asegúrate de validar las entradas del usuario para evitar errores.</li>
            <li>Uso de excepciones: Implementa un manejo de excepciones adecuado para gestionar errores en tiempo de ejecución.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#5" aria-expanded="false" aria-controls="5">
        Modularidad
      </button>
    </h2>
    <div id="5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Funciones pequeñas: Divide el código en funciones pequeñas y manejables que realicen tareas específicas.</li>
            <li>Reutilización: Evita la duplicación de código al crear funciones reutilizables.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#6" aria-expanded="false" aria-controls="6">
      Control de Versiones
      </button>
    </h2>
    <div id="6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Uso de sistemas de control de versiones: Utiliza herramientas como Git para gestionar cambios y colaborar con otros desarrolladores.</li>
           
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#7" aria-expanded="false" aria-controls="7">
      Pruebas
      </button>
    </h2>
    <div id="7" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Escritura de pruebas: Implementa pruebas unitarias y de integración para asegurar que el código funciona correctamente.</li>
            <li >Automatización: Automatiza las pruebas siempre que sea posible.</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#8" aria-expanded="false" aria-controls="8">
      Consistencia
      </button>
    </h2>
    <div id="8" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Estilo de codificación: Mantén un estilo de codificación coherente en todo el proyecto, siguiendo las guías del lenguaje específico.</li>
          
        </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#9" aria-expanded="false" aria-controls="9">
      Optimización
      </button>
    </h2>
    <div id="9" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Eficiencia: Escribe código eficiente y optimizado, pero sin sacrificar la legibilidad.</li>
          
        </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#10" aria-expanded="false" aria-controls="10">
      Seguridad
      </button>
    </h2>
    <div id="10" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Buenas prácticas de seguridad: Implementa medidas para proteger el código de vulnerabilidades, como la inyección SQL o el manejo inseguro de contraseñas.</li>
          
        </ul>
      </div>
    </div>
  </div>

        </div>




        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>En conclusion</h1>
            <p>Seguir estas normas de programación no solo mejora la calidad del código, sino que también facilita la colaboración entre desarrolladores y el mantenimiento a largo plazo del software.</p>
        </div>



        </>
    )	
}