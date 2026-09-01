import './App.css';
import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import maidSupremacyLogo from './images/Maid Supremacy logo detail.png';
import screenshot1 from './images/screenshot1.jpg';
import screenshot2 from './images/screenshot2.jpg';
import screenshot3 from './images/screenshot3.jpg';
import screenshot4 from './images/screenshot4.jpg';
import screenshot5 from './images/screenshot5.jpg';
import screenshot6 from './images/screenshot6.jpg';
import screenshot7 from './images/screenshot7.jpg';
import screenshot8 from './images/screenshot8.jpg';
import screenshot9 from './images/screenshot9.jpg';
import screenshot10 from './images/screenshot10.png';
import gameplayGif1 from './images/maid-supremacy-gif1.gif';
import gameplayGif2 from './images/maid-supremacy-gif2.gif';
import prika from './images/Lider.png';
import kogi from './images/Driver.png';
import machi from './images/Mechanic.png';
import vena from './images/Newbie.png';
import maidslogo from './images/logo_maids.png';

const steamUrl = 'https://store.steampowered.com/app/5138880/Maid_Supremacy_Achieving_World_Domination_with_a_Tank_Demo';
const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
  screenshot7,
  screenshot8,
  screenshot9,
  screenshot10,
];
const galleryContext = require.context('./images/Gallery', false, /\.(png|jpe?g|webp)$/);
const galleryImages = galleryContext.keys().sort().map((key) => ({
  src: galleryContext(key),
  name: key.replace('./', '').replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
}));

const App = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const materialBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBox);

    let carouselInstance;
    if (carouselRef.current) {
      carouselInstance = M.Carousel.init(carouselRef.current, {
        fullWidth: true,
        indicators: true,
        duration: 220,
      });
    }

    return () => {
      if (carouselInstance) {
        carouselInstance.destroy();
      }
    };
  }, []);

  const previousScreenshot = () => {
    const carouselInstance = M.Carousel.getInstance(carouselRef.current);
    if (carouselInstance) {
      carouselInstance.prev();
    }
  };

  const nextScreenshot = () => {
    const carouselInstance = M.Carousel.getInstance(carouselRef.current);
    if (carouselInstance) {
      carouselInstance.next();
    }
  };

  const CharacterDesc = (image, title, description, themeColor) => {
    return (
      <div className='row character-row' style={{
        textAlign: 'left',
        margin: '20px 0',
        background: `linear-gradient(0deg, ${themeColor} 0%, rgb(33, 33, 33) 100%)`,
        padding: '0',
      }}>
        <div className='col s12 m5 offset-m1 character-image-column' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={image} alt={title} style={{maxHeight: '430px', display: 'block'}}></img>
        </div>
        <div className='col s12 m5 character-copy-column' style={{
          textAlign: 'left',
        }}>
          <h4 style={{fontWeight: 'bold', fontSize: '52px'}}>{title}</h4>
          <p style={{
            fontSize: '22px',
            fontWeight: '400',
          }} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="header">
        <img src={maidSupremacyLogo} alt="Maid Supremacy Logo" className='logo main-logo' style={{
          marginTop: '20px',
          marginBottom: '20px',
        }} />
        <div className='center-button'>
          <a href={steamUrl} target="_blank" rel="noreferrer" className="btn waves-effect waves-light transparent cool-button steam" style={{
            maxWidth: '380px',
            width: '100%',
            height: '100px',
            margin: '10px',
            border: '4px solid #FFFFFF',
          }}
          >
            <i className="bi bi-steam left" style={{fontSize: '.73cm', marginLeft: '12px'}}></i>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>Play the Demo on Steam</div>
          </a>
        </div>
        <h2 style={{
          fontSize: '22px',
        }}>Maid Supremacy is a linear 3D action-shooter about drifting tanks, cute female characters, stackable weapons, and proving that MAIDS ARE BETTER.</h2>
      </div>
      <div className="angled-section trailer-background" style={{marginTop: '35px', paddingBottom: '180px'}}>
        <h2 style={{
          fontWeight: 'bold',
        }}>Trailer</h2>
        <div style={{padding: '0 10%'}}>
          <iframe className="full-width-video" id="maid-supremacy-trailer" src="//www.youtube.com/embed/-osCENcATuQ" frameBorder="0" allowFullScreen={true} title="Maid Supremacy trailer video"></iframe>
          <label style={{color:"white"}} htmlFor="maid-supremacy-trailer">Maid Supremacy trailer</label>
        </div>
      </div>
      <div id="gameplay" className='pattern-background' style={{
        marginTop: '-100px',
        zIndex: '80',
        position: 'relative',
        padding: '20px',
      }}>
        <h2>About</h2>
        <div className="about-story">
          <p>Maid Supremacy is a linear 3D action-shooter focused on fun gameplay and cute female characters. In a world where clothes dictate culture and identity, maids must prove they are superior through sheer violence and dominance.</p>
        </div>
        <div className="gameplay-gifs">
          <div className="gameplay-gif-frame">
            <img src={gameplayGif1} alt="Maid Supremacy tank combat gameplay" />
          </div>
          <div className="gameplay-gif-frame">
            <img src={gameplayGif2} alt="Maid Supremacy drifting tank action" />
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m5 offset-m1'>
            <img src={screenshot1} alt="Maid Supremacy drifting tank near a waterfall" className='materialboxed' style={{width: '100%'}}></img>
          </div>
          <div className='col s12 m5' style={{
            textAlign: 'left',
          }}>
            <h3>Drift through a 3D action campaign</h3>
            <p style={{fontSize: '26px'}}>Take cover, dash, and drift in a tank that is far more mobile than normal. Push forward through linear missions built around fast action, aggressive movement, and cute chaos.</p>
          </div>
        </div>
        <div className='row reverse-on-mobile'>
          <div className='col s12 m5 offset-m1' style={{
            textAlign: 'left',
          }}>
            <h3>Customize and unlock more parts</h3>
            <p style={{fontSize: '26px'}}>Customize the tank with different bases, heads, extensions, and camouflages earned by completing difficult objectives throughout the campaign. Stack up to 3 extensions at once, each with its own advantages and disadvantages, to keep the action fast while still feeling tactical.</p>
          </div>
          <div className='col s12 m5 offset-m1' style={{margin: 0}}>
            <img src={screenshot3} alt="Maid Supremacy weapon extension combat" className='materialboxed' style={{width: '100%'}}></img>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m5 offset-m1'>
            <img src={screenshot6} alt="Maid Supremacy linear campaign battle" className='materialboxed' style={{width: '100%'}}></img>
          </div>
          <div className='col s12 m5' style={{
            textAlign: 'left',
          }}>
            <h3>Fight through a linear story campaign</h3>
            <p style={{fontSize: '26px'}}>In a world where clothes dictate culture and identity, maids must prove they are simply superior. Push through a linear 3D action-shooter campaign, destroy those uncultured girls, and achieve world domination with a tank.</p>
          </div>
        </div>
        <div className='row reverse-on-mobile'>
          <div className='col s12 m5 offset-m1' style={{
            textAlign: 'left',
          }}>
            <h3>Bring friends into the conquest</h3>
            <p style={{fontSize: '26px'}}>Play alone or invite your friends through local and/or online co-op. Up to 4 players can join the campaign, just like the good old days.</p>
          </div>
          <div className='col s12 m5 offset-m1' style={{margin: 0}}>
            <img src={screenshot9} alt="Maid Supremacy cooperative tank battle" className='materialboxed' style={{width: '100%'}}></img>
          </div>
        </div>
      </div>

      <div id="characters">
        <h2 className="characters-title">Characters</h2>
        {CharacterDesc(prika, 'Prika', 'A stoic leader who hates paperwork and loves action! She takes her work very seriously and even practices swordsmanship in her free time.', 'rgb(22, 69, 66)')}
        {CharacterDesc(kogi, 'Kogi', 'A cowgirl-styled driver and a master of tight curves! When she discovered she could get paid to do what her heroines do, she entered the military without a second thought.', 'rgb(70, 64, 42)')}
        {CharacterDesc(machi, 'Machi', 'The group mechanic and Kogi\'s best friend. She is so good at her job that she is even arrogant about it.', 'rgb(86, 39, 43)')}
        {CharacterDesc(vena, 'Vena', 'A newcomer to the squad, Vena looks up to Prika and her superiors. She is still a newbie with a lot to learn and gets picked on by Machi.', 'rgb(35, 79, 40)')}
      </div>

      <div id="gallery" className='gallery'>
        <h2 style={{
          fontWeight: 'bold',
        }}>Screenshots</h2>
        <div className="screenshot-carousel-wrap" aria-label="Maid Supremacy screenshots carousel">
          <button className="carousel-arrow" onClick={previousScreenshot} aria-label="Previous screenshot">
            <i className="bi bi-chevron-left"></i>
          </button>
          <div className="carousel carousel-slider screenshot-carousel" ref={carouselRef}>
            {screenshots.map((image, index) => (
              <a className="carousel-item" href={`#screenshot-${index + 1}`} key={image}>
                <img src={image} alt={`Maid Supremacy Screenshot ${index + 1}`}></img>
              </a>
            ))}
          </div>
          <button className="carousel-arrow" onClick={nextScreenshot} aria-label="Next screenshot">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <h2 className="gallery-title" style={{
          fontWeight: 'bold',
        }}>Gallery</h2>
        <div className='gallery-grid'>
          {galleryImages.map((image, index) => (
            <div className='gallery-grid-item' key={image.src}>
              <img
                src={image.src}
                alt={`Maid Supremacy gallery ${index + 1}: ${image.name}`}
                className='materialboxed'
                style={{width: '100%'}}
              ></img>
            </div>
          ))}
        </div>
        <img src={maidslogo} alt="MaidsWithGuns Developer Logo" className='logo' style={{
          marginTop: '20px',
          marginBottom: '20px',
        }} />
        <div style={{
          textAlign: 'center',
          margin: '40px auto',
        }}>
          <p style={{ fontSize: '24px', fontWeight: '500', marginBottom: '20px' }}>
            Know the people who worked on the game!
          </p>
          <ul style={{ listStyle: 'none', padding: '0', lineHeight: '2' }}>
            <li><a href="https://x.com/MaidsWithGuns_" target="_blank" rel="noreferrer">MaidsWithGuns</a> - <strong>Producer</strong></li>
            <li><a href="https://www.youtube.com/watch?v=geNMz0J9TEQ" target="_blank" rel="noreferrer">Big D.</a> - <strong>Artist</strong></li>
            <li><a href="https://www.instagram.com/bigscaryindian/" target="_blank" rel="noreferrer">BigScaryIndian</a> - <strong>Musician</strong></li>
          </ul>
          <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}>
            Contact me through: contact@maidswithguns.com
          </p>
        </div>
        <h3>For creators</h3>
        <div className='center-button'>
          <a href="https://drive.google.com/drive/folders/1QqsqAa71GwQXUQ0jJkDE5vuID8s-mmHd?usp=sharing" target="_blank" rel="noreferrer" className="btn waves-effect waves-light transparent cool-button steam" style={{
            maxWidth: '380px',
            width: '100%',
            height: '100px',
            margin: '10px',
            border: '4px solid #FFFFFF',
          }}
          >
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>Presskit images</div>
          </a>
        </div>
      </div>
      <div style={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        zIndex: 1000,
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            backgroundColor: '#222',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#444'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#222'}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default App;
