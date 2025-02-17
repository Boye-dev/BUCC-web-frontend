import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer'
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import google from '../Images/google.png'
import alumni from '../Images/alumni.png'
import student from '../Images/student.png'
import '../CSS/component.css'
import '../CSS/index.css'


const index = () => {
  return <div className='index'>
      <Navbar />
      <Carousel />
      <div className="sec1">
        <img src={img1} alt="" className='sec1Images'/>
        <img src={img2} alt="" className='sec1Images'/>
        <img src={img3} alt="" className='sec1Images'/>
      </div>

      <div className="sec2">
          <div className="row no-gutters">
            <div className="col">
              <img src={google} alt="" />
            </div>
            <div className="rightCol col align-self-center">
              <div className="sec2Text">
                <span>
                  We’re a Team <br />
                  We’re a Family
                </span>
                <p>We’re BUCC!</p> <br />
              </div>
                <p>
                  The Babcock University Computer Club is a student chapter of the University's Computing and Engineering Sciences Department.
                  The mission of this club is to make possible the needs and interests of the computer science and engineering students as well as anybody with an interest in software development.
                  It is not necessary for any club member to be a student of the department nor is knowledge of any programming language required.
                </p>
                <button className='sec2Btn btn btn-primary'>Click to learn more</button>
            </div>
        </div>
      </div>

      <div className="sec3">
        <div id="carousel2ExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carousel2ExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carousel2ExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carousel2ExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                <center><h1 className='pb-5'>Inspiring Testimonies</h1></center>
                    <div className="carousel-item active">
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4 col-lg-3">
                            <img src={alumni} alt="alumni" />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <p>It was fun talking with some Babcock students today 💪🏽💪🏽💪🏽 I was able to listen to some of the problems they are scared of and motivated them to seek greatness 🔥🔥🔥 I see the future tech leaders and I see the fire of passion waiting to be ignited 👊🏽👊🏽👊🏽</p>
                            <p className='alumniName'>Okubanjo Funsho</p>
                            <p className='alumniYear'>2013 Alumnus</p>
                        </div>
                      </div>                    
                    </div>
                    <div className="carousel-item">
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4 col-lg-3">
                            <img src={alumni} alt="alumni" />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <p>It was fun talking with some Babcock students today 💪🏽💪🏽💪🏽 I was able to listen to some of the problems they are scared of and motivated them to seek greatness 🔥🔥🔥 I see the future tech leaders and I see the fire of passion waiting to be ignited 👊🏽👊🏽👊🏽</p>
                            <p className='alumniName'>Okubanjo Funsho</p>
                            <p className='alumniYear'>2013 Alumnus</p>
                        </div>
                      </div>                    
                    </div>
                    <div className="carousel-item">
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4 col-lg-3">
                            <img src={alumni} alt="alumni" />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <p>It was fun talking with some Babcock students today 💪🏽💪🏽💪🏽 I was able to listen to some of the problems they are scared of and motivated them to seek greatness 🔥🔥🔥 I see the future tech leaders and I see the fire of passion waiting to be ignited 👊🏽👊🏽👊🏽</p>
                            <p className='alumniName'>Okubanjo Funsho</p>
                            <p className='alumniYear'>2013 Alumnus</p>
                        </div>
                      </div>                    
                    </div>
                </div>
                <div className="lowSec3">
                  <div className="row">
                    <div className="col-12 col-md-6">
                        <span className=''>Do you have any question you would love to ask us?</span>
                    </div>
                    <div className="col-12 col-md-6">
                       <button className='btn sec3Btn mt-3'>Contact us now</button>
                    </div>
                  </div>
                
                </div>
                <a className="carousel-control-prev" href="#carousel2ExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carousel2ExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
                </a>
        </div>
      </div>

      <div className="sec4">
        <div className="outerSec4">
          <div className="innerSec4">
            <div className="row">
              <div className="col-12 col-md-6 studentImg">
                  <img src={student} alt="" />
              </div>
              <div className="rightCol col-12 col-md-6 align-self-center">
                  <h1 className='sec2Text'><span className='text-primary'>Let’s Build Something</span> <span>  Great Together</span></h1>
                  <p>It is not necessary for any club member to be a student of the department nor is knowledge of any programming language required.</p>
                  <button className="btn sec4Btn">Lets Talk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
  </div>;
};

export default index;
