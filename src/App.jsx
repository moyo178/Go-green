  import { useState } from 'react'
  import './App.css'
  import plant from './images/plants.png';
  import plants from './images/Circle.svg';
  import arrow from './images/arrow.svg';
  import pot from './images/Flowers.png';
  import ServicesCard from "./components/ServicesCard";
  import { ServicesData } from "./data/data";
  import flower from './images/flower.png';
  import ferns from './images/ferns.png'
  import pothos from './images/pothos.png'
  import gasteria from './images/gasteria.png'
  import palm from './images/palm.png'
  import fig from './images/fig.png'
  import david from './images/Lady.png'
  import stars from './images/Star.svg'
  import arrows from './images/Arrow1.svg'
  import linke from './images/linke.svg'
  import insta from './images/insta.svg'
  import whats from './images/whats.svg'
  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
      <section className="pt-6 flex self-center gap-60 pb-7 pl-10 bg-white fixed top-0 w-full text-black p-4 z-10 border-b-2 border-black" id='header'>
        <h1 className="text-5xl font-bold  self-center">
          Go <span className="text-green-700 font-semibold ">green</span>
        </h1>
        <ul className="flex gap-14 self-center font-semibold text-2xl">
          <li>Home</li>
          <li>product</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

      <button className="bg-green-950 text-white w-28 rounded-lg">Login</button>
      </section>  
      
        <section className='boxes'>

        <div className="" id='boxes-txt'>
        <h1 className="" id='txt1'>We love helping you
        to save the earth</h1>
      <p id='txt2'>simply dummy text of the printing and typesetting industry Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a gallery.
   </p>
   <button className="bg-green-950 text-white w-44 h-12 rounded-md mt-8">
    Buy now
   </button>
   </div>
   <div className="bx">
     <div className='green-box'>
  </div>
  
  <img src= {plant} alt="" className="mb-9 border-red-500" id='pl'/>
  </div>

      </section>
<div className="flex gap-10 pt-16">
  <p id='li1'></p>
  <p id='li2'></p>
  <p id='li1'></p>
</div>

 <div className="flex justify-center pt-5 gap-2">
  <p className="" id="line"></p>
  <p className="" id='line1'></p>
  <p className="" id='line2'></p>
  <p className="" id='line2'></p>
  <p className="" id='line2'></p>
 </div>
   <section className="flex pl-12 justify-between" id='plants'>
    <div id='box4' className="flex gap-0">
    <img src={plants} alt="" className='pt-10 ' id='img2' />
    <div className='dye'>
      <div className='dye1'>
        <h2>1200+</h2>
        <h4>delivery</h4>
      </div>
      <div className='dye2'>
        <h2>12+</h2>
        <h4>year Experience</h4>
      </div>
    </div>
    </div>

     <div className="text-green-950" id='solutions'>
     <h2 id='luk'>Let us know</h2>
    <h1 id='sfa'>Solutions For All Kind Of plants</h1>
    <p id='txxt'>simply dummy text of the printing and typesetting industry. Lorem
    ipsum has been the industry’s standard dummy text ever since the
    1500s, when an unknown printer took a gallery.   </p>

<button className="bg-green-950 text-white w-44 h-12 rounded-md mt-8">Read out</button>
     </div>
   </section>

   <section className="flex justify-between " id="explore">
    <div id='explore-txt'>
    <h1 id='explore-txt1'>Every Week free plant</h1>
    <h3 id='explore-txt2'>Make people happy</h3>
    <h4 className="flex gap-5 pt-44">Explore now <img src={arrow} alt=""/></h4>
    </div>

    <div className="pt-4 ">
      <img src={pot} alt="" id='pot' />
    </div>
   </section>
   <section className='color'>
    <h1 className="text-black text-center pt-16" id='services-txt' >Our services</h1>
   <section className='services'>

    {ServicesData.map((item)=> <ServicesCard key={item.id}  display={item.display} title={item.title}  text={item.text}/>)}
   </section>

   <section className='Types'>
    
   </section>

   <h1 className="text-black text-center pt-16" id='services-txt' >Best Sellers</h1>

   <section className="best">
        <div className='flexs'>
     <img src={flower} alt="" className='flower'/>
    <div id='card1'>

      <div id='img-box'>
        <h3 className='water'>Water Oak</h3>
        <p className='txt-6'>the industry’s stand since the 1500s, when an unknown printer took a gallery.</p>
        <h3 id='amount'>$230.00</h3>
      </div>
      </div>    </div> 

        <div className='flexs'>
     <img src={ferns} alt="" className='flower'/>
    <div id='card1'>
      <div id='img-box'>
        <h3 className='water'>Lady Ferns</h3>
        <p className='txt-6'>the industry’s stand since the 1500s, when an unknown printer took a gallery.</p>
        <h3 id='amount'>$230.00</h3>
      </div>
      </div>
        </div> 
        <div className='flexs'>
     <img src={pothos} alt="" className='flower'/>
    <div id='card1'>
      <div id='img-box'>
        <h3 className='water'>Hawaian pothos</h3>
        <p className='txt-6'>the industry’s stand since the 1500s, when an unknown printer took a gallery.</p>
        <h3 id='amount'>$230.00</h3>
      </div>
      </div>
        </div> 
        <div className='flexs'>
     <img src={gasteria} alt="" className='flower'/>
    <div id='card1'>
      <div id='img-box'>
        <h3 className='water'>Gasteria</h3>
        <p className='txt-6'>the industry’s stand since the 1500s, when an unknown printer took a gallery.</p>
        <h3 id='amount'>$230.00</h3>
      </div>
      </div>
        </div> 
        <div className='flexs'>
     <img src={palm} alt="" className='flower'/>
    <div id='card1'>
      <div id='img-box'>
        <h3 className='water'>Sago palm</h3>
        <p className='txt-6'>the industry’s stand since the 100s, when an unknown printer took a gallery.</p>
        <h3 id='amount'>$230.00</h3>
      </div>
      </div>
        </div> 
        <div className='flexs'>
     <img src={fig} alt="" className='flower'/>
    <div id='card1'>
      <div id='img-box'>
        <h3 className='water'>Fiddle Leaf fig</h3>
        <p className='txt-6'>the industry’s stand since the 1500s, when an unknown printer took a gallery.</p>
        <h3 id='amount'>$230.00</h3>
      </div>
      </div>
        </div> 

   </section> 
   <section className='reviews'>
    <div className='review-flex'>
    <img src={david} alt="" className='lady'/>
    <div className='review-txt'>
    <h2 className='review-header'>What our customers say about us</h2>
    <p className='review-p'>Lorem Ipsum has been the industry’s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not
    only five centuries, but  also the leap into electronic typesetting,
    remaining essentially unchanged. it was popularised in the 1960s
    passages, and more recently with desktop </p>
    <h3 className='review-h3'>David Kelvin</h3>
    <h3 className='review-txt1'>Founder & CEO <span>Narrow deck</span></h3>
    <div className='star'>
      <img src={stars} alt="" />
      <h4>Rating</h4>
    </div>
    </div>
    </div>

    <img src={arrows} alt="" className='arrow'/>
   </section>
<section className='subscribe'>
  <h2 className='subscribe-h2'>
    Subscribe Newsletter
  </h2>
  <h5 className='subscribe-h5'>Subscribe to our newsletter to get for
   new update</h5>
  <div className='input-group'>
    <input type="input" className="input" placeholder='Enter your email'/>
    <button className="bg-green-950 text-white w-28 rounded-lg h-10">Get started</button>
    </div>
</section>

      <section  className='footer'></section>
      <div className='social'>
        <div className='footer-content1'>
        <h1 className="text-5xl font-bold  self-center"   id='GG'>
          Go <span className="text-green-700 font-semibold ">green</span>
        </h1>

          </div>
          <div className='footer-content2'>
            <div id='lorem' className="text-4xl ">
            Go <span className="text-green-700 font-semibold text-4xl ">green</span>
            <div className="line"></div>
           <p className='footer-p'>Web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions.</p>
            </div>
            <div  className='links'>
              <h2 className='link'>
                Links
              </h2>
              <div className="line2"></div>  
              <div className='akoka'>
              <div className='li' >Nigeria office</div >
              <div className='li' >Go green Nigeria Private Limited</div >
              <div className='li' >Akoka, Lagos, Nigeria-611 09</div >
              <div className='li' >Akoka, Lagos, Nigeria-611 09</div >
              </div>
            </div>
            <div  className='contact'>
              <h2  className='cont'>Contact Us</h2>
              <div  className="line3"></div>
              <div className='con'>
                <h2>Email</h2>
                <p>admin@lorem.co.uk</p>
              </div>
              <div className='tel'>
                <h2>Phone</h2>
                <p> +(0)176398981986</p>
              </div>
            </div>
            <div  className='sm'>
            <h2  className='cont'>Social media</h2>
            <div id='svg'>
          <img src= {linke} alt="" />
          <img src={insta} alt="" />
          <img src={whats} alt="" />
          </div>
            </div>
          </div>
          </div>
        <div className='policy'>
         <h4 className='policy-txt'>  Cookie Policy | Privacy Policy </h4> 
        </div>
     </section> 
    </>
  )
  
}

export default App
