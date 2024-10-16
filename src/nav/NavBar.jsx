export const NavBar = () => {
    return (	
        <nav class="navbar navbar-expand-lg text-light bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Desarrollo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Lenguaje</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Normas</a>
              </li>
              
            </ul>
          </div>
         </div>
        </nav>	
    )	
}