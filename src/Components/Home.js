import {React, useEffect} from 'react'
import p1 from '../images/profile1.jpeg'
import p2 from '../images/profile2.jpeg'
import p3 from '../images/profile3.jpeg'
import p4 from '../images/profile4.jpeg'

import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/signup');
  }

  useEffect(() => {
    if(localStorage.getItem('result'))
      localStorage.removeItem('result');
  }, [])
  

  const onClickDet = () => {
    navigate('/form');
  }

  return (
    <div className='home'>
      <div className='home-top'>
        <h1>Don't let heart disease 
          <br /> Hold you back 
          <br /> From the life you deserve
          <br /> Detect it early
        {!localStorage.getItem('u-token')
        ?
        <div>
          <button onClick={onClick} type="button" className="btn btn-danger">SIGN UP</button>
        </div>
        :
        <div>
          <button onClick={onClickDet} type="button" className="btn btn-primary">DETECT</button>
        </div> }
        </h1>
      </div>
      <div className='home-mid'>
        <h2>Advantages</h2>
        <div className='adv'>
          <div className='advs'>
            <h3>Accessibility</h3>
            <p>A heart disease detection application can be accessed from anywhere at any time, making it much more convenient for users. This means that individuals can monitor their heart health without having to make appointments.</p>
          </div>
          <div className='advs'>
            <h3>Cost-Effectiveness</h3>
            <p>In-person checkups can be expensive, especially for those without insurance. In contrast, a heart disease detection application can be very affordable or even free, making it more accessible for individuals with limited financial resources.</p>
          </div>
          <div className='advs'>
            <h3>Timeliness</h3>
            <p>Traditional checkups are usually scheduled at regular intervals, such as annually or bi-annually. However, heart disease detection applications can monitor an individual's heart health continuously, providing real-time feedback on any changes or abnormalities.</p>
          </div>
          <div className='advs'>
            <h3>Accuracy</h3>
            <p>Heart disease detection applications use advanced algorithms and machine learning to analyze data. This allows for a more accurate and detailed analysis of an individual's heart health than may be possible during a physical checkup.</p>
          </div>
        </div>
      </div>
      <div className='home-end'>
        <h3>About Us</h3>
        <div className='about'>
          <div className='abouts'>
            <img className='img1' src={p1} alt="hello" />
            <h4>Vipul Gupta</h4>
            <p>You are welcome to contact us with any recommendations. Your suggestions are much appreciated.</p>
            <div className='icon'>
            <Link target='_blank' to='#' onClick={() => window.location = 'mailto:vipulguptavg111@gmail.com'}><i className="fab fa-google"></i></Link>
            <Link target='_blank' to='//linkedin.com/in/vipul-gupta-70b9a6206/'>  <i className="fab fa-linkedin-in"></i></Link>
            <Link target='_blank' to='//github.com/Vipul1162'>  <i className="fab fa-github"></i></Link>
            </div>
          </div>
          <div className='abouts'>
            <img className='img1' src={p2} alt="hello" />
            <h4>Priyanshu Trivedi</h4>
            <p>You are welcome to contact us with any recommendations. Your suggestions are much appreciated.</p>
            <div className='icon'>
            <Link target='_blank' to='#' onClick={() => window.location = 'mailto:priyanshutrivedi60@gmail.com'}><i className="fab fa-google"></i></Link>
            <Link target='_blank' to='//linkedin.com/in/priyanshu-trivedi-517250211//'>  <i className="fab fa-linkedin-in"></i></Link>
            <Link target='_blank' to='//github.com/PriyanshuTrivedi'>  <i className="fab fa-github"></i></Link>
            </div>
          </div>
          <div className='abouts'>
            <img className='img1' src={p3} alt="hello" />
            <h4>Nayan Gupta</h4>
            <p>You are welcome to contact us with any recommendations. Your suggestions are much appreciated.</p>
            <div className='icon'>
            <Link target='_blank' to='#' onClick={() => window.location = 'mailto:nayangupta100@gmail.com'}><i className="fab fa-google"></i></Link>
            <Link target='_blank' to='//linkedin.com/in/nayan-gupta-86b782191/'>  <i className="fab fa-linkedin-in"></i></Link>
            <Link target='_blank' to='//github.com/lastwish2103'>  <i className="fab fa-github"></i></Link>
            </div>
          </div>
          <div className='abouts'>
            <img className='img1' src={p4} alt="hello" />
            <h4>Shubh Gupta</h4>
            <p>You are welcome to contact us with any recommendations. Your suggestions are much appreciated.</p>
            <div className='icon'>
            <Link target='_blank' to='#' onClick={() => window.location = 'mailto:shubhg1g1@gmail.com'}><i className="fab fa-google"></i></Link>
            <Link target='_blank' to='//linkedin.com/in/shubh-gupta06/'>  <i className="fab fa-linkedin-in"></i></Link>
            <Link target='_blank' to='//github.com/shubh01062002'>  <i className="fab fa-github"></i></Link>
            </div>
          </div>
        </div>
        <hr/>
        <div className='footer'>
          <div><i className='far fa-copyright'></i></div>
          <div>Coded By Us</div>
        </div>
      </div>
    </div>
  )
}

export default Home