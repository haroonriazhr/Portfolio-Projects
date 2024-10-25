import './Partner.css'
import Navbar from '../Navbar/Navbar';
import Winner from '../Caraousal/Winner/Winner';
import img2 from '../assets/Img/Artboard-29.webp';
import partner from '../assets/Img/Artboard-81.webp';

const Partner = () => {
  return (
    
    <>
    <Navbar/>

      <div className='partner-elem'>
        <div className="partnertxt">
        <h1>Unlock New Revenue Opportunities with Our Channel Partnership Program </h1>
        <div className="p-btn">
          <button>Enquire now</button>
          <button>Download our partnership brochure</button>
        </div>
        </div>
      </div>
      <div className="pcustom-shape-divider-bottom-1723648964">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="partner-2">
        <div className="partner-2-left">
          <h1>Partner inspired software, telecoms, energy and billing solutions.</h1>
          <p>With over 40 years of experience in the telecom market, we have developed a dynamic partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, Broadband and Utility solutions.</p>
          <p>Our collaborative approach is designed to provide your business with greater value for both existing and new customers who require these essential services.</p>
        </div>
        <div className="partner-2-right">
          <h1>Dealer programme</h1>
          <h1>Wholesale partnership</h1>
          <h1>Referral programme</h1>
        </div>
      </div>

      <div className="partner-carousal">
        <div className="pc-txt">
          <h1>Fidelity Group – Multi-award winners</h1>
          <div className="pc-para">
            <p>With over 30 years experience in the channel partner space, we’ve built an enviable reputation for supporting our channel partners with the very best solutions, allowing them to generate recurring revenues and generate new business continually.</p>
            <p>As multi-award winners across a wide range of services, you know you can trust our business partnerships! In July 2024 we took home more awards for our services than anyone else.</p>
          </div>
        </div>
        <Winner/>
      </div>

      <div className="partner-cards">
        <h1>Choose the perfect partnership for your business</h1>
        <div className="card-wrapper">
        <div className="p-card">
          <h3>Dealer partnership</h3>
          <p>✓ Incentive and growth programmes</p>
          <p>✓ Sales and product training</p>
          <p>✓ Full product suite access</p>
          <p>✓ Anvil Access and training</p>
          <p>✓ Dual branded customer billing</p>
          <p>✓ 24/7/365 customer support service</p>
          <p>✓ Inside track market update</p>
          <p>✓ Dedicated account management.</p>
          <p>✓ Provisioning and fault management</p>
          <button>Enquire now</button>
        </div>

        <div className="p-card">
          <h3>Referral partnership</h3>
          <p>✓ Incentive and growth programmes</p>
          <p>✓ Sales and product training</p>
          <p>✓ Full product suite access</p>
          <p>✓ Dual branded customer billing</p>
          <p>✓ 24/7/365 customer support service</p>
          <p>✓ Inside track market update</p>
          <button>Enquire now</button>
        </div>

        <div className="p-card">
          <h3>Wholesale partnership</h3>
          <p>✓ Incentive and growth programmes</p>
          <p>✓ Provisioning and fault management</p>
          <button>Enquire now</button>
        </div>
        </div>
        <div className="phonebtn">
        <button>Enquire now</button>
        <button>Enquire now</button>
        <button>Enquire now</button>
        </div>
      </div>

      <div className="pr">
        <div className="pr-img">
        <img src={partner} alt="" />
        </div>
        <div className="pr-txt">
          <h1>More than just billing</h1>
          <p>Fidelity leverages the market-leading billing management software, Anvil—a comprehensive business management platform that empowers our resellers to quote, order, and bill their end users according to their specific requirements. Supported by our 24/7/365 customer support service, we ensure that driving revenue growth for your business becomes effortless.</p>
          <button>Find out more</button>
        </div>
          
      </div>
      
      <div className='ptri-btn'>
        <button>Our mission</button>
        <button>Tech and Telecoms Partners</button>
        <button>Energy Partners</button>
      </div>

      <div className='contact'>
      <div className='contwrap'>
        <h1 className='conttxt'>Contect with us</h1>
        <p className='contp'>If you’d like to find out more, why not call us now on 0800 840 6800 or simply fill in our contact form below and we’ll be in touch.</p>

        <form>
          <div className='form-wrap'>
          <input className='same' type="text" placeholder='Name' />
          <input className='same' type="text" placeholder='Company' />
          <input className='same' type="phone" placeholder='Contact Number' />
          <input className='same' type="email" placeholder='E-Mail' />
          </div>
          <textarea name="messege" id="text" rows={10} placeholder='Messege'></textarea>
          <div className='formch'>
          <input type="checkbox" name="" id="" />
          <button>Submit</button>
          </div>
        </form>
      </div>
      
      <div className='cont-img'>
        <img src={img2} alt="" />
      </div>
      </div>
    
    </>
  )
}

export default Partner