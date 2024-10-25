import './Contact.css'
import cont from '../assets/Img/Contact.webp'

const Contact = () => {
  return (
    <>
    <div className='head'>
    </div>

    <div className="cot-container">
      <div className="cont-left">
      <div className="txt">
      <h1>Talk to us today</h1>
      <p>We’d love to talk you if you are considering using one of our outstanding services. Or if you’d like to find out how you can become one of our trusted partners. We have a team of experts ready to help you.</p>
      </div>
      <div className='contwrap'>
        <form>
          <div className='form-wrap'>
          <input className='same' type="text" placeholder='Your Name' />
          <input className='same' type="text" placeholder='Your Company' />
          <input className='same' type="phone" placeholder='Your Contact Number' />
          <input className='same' type="email" placeholder='Your E-Mail address' />
          </div>
          <textarea name="messege" id="text" rows={8} placeholder='How can we help?'></textarea>
          <div className='formc-ch'>
          <button>Send</button>
          </div>
        </form>
    </div>
      </div>

      <div className="cont-right">
      <div className='cont-img'>
        <img src={cont} alt="" />
      </div>
      <div className="r-txt">
      <h2>Prefer to pick up the phone and talk to us?</h2>
      <p><strong>0800 840 6800</strong> to talk to us about any of our services or partnerships.</p>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact