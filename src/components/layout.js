import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/styles.scss'

const Layout = (props) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="index.html">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    {props.children}
    <footer className="border-top">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2022</div>
          </div>
        </div>
      </div>
    </footer>
  </>
)
export default Layout