import './App.css';
import logo from './imagenes/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiDownArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import { BiUpArrow } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import portada1 from './imagenes/portada-01.jpg';
import video from './imagenes/video.mp4';


function App() {
  return (
    <div className="App">

      <div className="main-container">
        {/* MENU ESCRITORIO */}
        <div className="menu">
          <div className='menu-izquierda'>
            <ul>
              <li><a href='#' >PRINCIPAL</a></li>
              <li><a href='#' >TAREAS</a></li>
            </ul>
          </div>

          <div className="logo">
            <img src={logo} />
          </div>

          <div className='menu-derecha'>
            <ul>
              <li><a href='#' >CALENDARIO</a></li>
              <li><a href='#' >AGENDA</a></li>
            </ul>
          </div>

        </div>

        {/* MENU MOVIL */}
        <div className='menu-movil'>
          <div className='menu-abrir-cerrar'>
            <div className='header'>
              <a href='#' className='logo'>
                <img src={logo} />
              </a>
              <a href='#'>
                <GiHamburgerMenu />
              </a>
            </div>
            <div id='menu-mobil-items' className='menu-mobil-closed' >
              <ul>
                <li><a href=''></a>PRINCIPAL</li>
                <li><a href=''></a>TAREAS</li>
                <li><a href=''></a>CALENDARIO</li>
                <li><a href=''></a>AGENDA</li>
              </ul>

            </div>

          </div>
        </div>


        {/* //////////////////VIDEO PORTADA */}
        <section className='main-video'>
          <div className='video'>
            <video autoPlay loop muted><source src={video} /></video>
          </div>
        </section>

        {/* ///////////////INTRO */}
        <section className='intro'>
          <h2>CONTAR DE QUE SE TRATA  DESCRIPCION DE LA APP
            <p>
              tgheggdjj djj dghgg dggdgd klakkdj dj dg djjjjfdghdk fjjfjj dghhghsd jñdñdl

            </p>
          </h2>
        </section>

        {/* //////////WORK */}
        <section>
          <h2>WORK</h2>
          <div className='grid-work'>

            {/* ///////////items */}
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>
            <a href='#' className='item' id='0'>
              <img src={portada1} width='100%' />
              <div className='bg-hoover'>
                <div className='info'>
                  <div className='title'>TITUTLO</div>
                  <div className='customer'>ESPACIO</div>
                </div>
              </div>
            </a>

            {/* //////////////////////////FIN ITEMS */}
          </div>
        </section>

        {/* ///////////////ABAUT */}
        <section className='abaut'>
          <h1>SKILLS</h1>
          <p>DIRECCION CREATIVA</p>
          <div className='columns'>
            <div>
              <h3>ACERCAD DE</h3>
              <p>djdjfju djjdjjdj fjfjjdjdj fjdjdjdjjd fjfjfjj djjdjdjj djdjdjjdj</p>
            </div>
            <div>
              <h3>CURSOS</h3>
              <p>djdjfju djjdjjdj fjfjjdjdj fjdjdjdjjd fjfjfjj djjdjdjj djdjdjjdj</p>
            </div>
            <div>
              <h3>EXPOSICIONES</h3>
              <p>djdjfju djjdjjdj fjfjjdjdj fjdjdjdjjd fjfjfjj djjdjdjj djdjdjjdj</p>
            </div>
          </div>

        </section>


        {/* ///////////////CONTACTO */}
        <section className='contact'>
          <div className='contact-container'>
            <h2>CONTACTOS</h2>
            <div className='columns'>
              <div className='lugar'>
                <h1>DOMICILIO</h1>
              </div>
              <div className='redes'>
                <h1>REDES SOCIALES</h1>

              </div>
              <div className='E_mail'>
                <h1>E MAIL</h1>

              </div>

            </div>
          </div>

        </section>

        <footer></footer>

      </div>
      {/* ///////////////GALLERY */}
      <div id='detail-container'>
        <div className='nav-bar'>
          <div></div>
          <div className='nav-buttons'>
            <a href='#'>
              <BiLeftArrow />        
            </a>
            <a href='#'>
              <BiRightArrow />        
            </a>
          </div>

          <div className='close'>
            <a  href='#'>
              <AiOutlineClose />
            </a>
          </div>

        </div>
        <div className='items'>
          <div className='item item-hide'>
            <div className='main-image'>
            <img src={portada1} alt='' />
            </div>
            <div className='title'>
              <h3>PONER UN ITUTLO</h3>
            </div>
            <div className='description'>
              fjfjfjjfjfjfjjfjfj jfjfj fjhdhh dshdh dh dh hh hhhdhdhhdh dhdh dhfhaooir aoijn dpoj 
            </div>

            <div className='main-image'>
            <img src={portada1} alt='' />
            </div>
            <div className='title'>
              <h3>PONER UN ITUTLO</h3>
            </div>
            <div className='description'>
              fjfjfjjfjfjfjjfjfj jfjfj fjhdhh dshdh dh dh hh hhhdhdhhdh dhdh dhfhaooir aoijn dpoj 
            </div>

            <div className='main-image'>
            <img src={portada1} alt='' />
            </div>
            <div className='title'>
              <h3>PONER UN ITUTLO</h3>
            </div>
            <div className='description'>
              fjfjfjjfjfjfjjfjfj jfjfj fjhdhh dshdh dh dh hh hhhdhdhhdh dhdh dhfhaooir aoijn dpoj 
            </div>
          </div>

        </div>
      </div>
      {/* //////////////////////////SCREEN */}

      <div id='screen'></div>
    </div>
  );
}

export default App;
