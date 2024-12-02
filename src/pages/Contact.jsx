import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
   <div>
  {/* inner page section */}
  <section className="inner_page_head">
    <div className="container_fuild">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <h3>Contact us</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
 
   {/* Contact Start */}
 <section classname="arrival_section">
  {/* Contact Start */}
  <div className="container-fluid contact py-5">
    <div className="container py-5">
      <div className="p-5 bg-light rounded">
        <div className="row g-4">
          <div className="col-12">
            <div className="text-center mx-auto" style={{maxWidth: 700}}>
              <h1 className="text-primary">Get in touch</h1>
              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="h-100 rounded">
              <iframe className="rounded w-100" style={{height: 400}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="col-lg-7">
            <form action className>
              <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
              <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
              <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Your Message" defaultValue={""} />
              <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="d-flex p-4 rounded mb-4 bg-white">
              <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
              <div>
                <h4>Address</h4>
                <p className="mb-2">616 st Boeng Kork2,Toul Kork,Phom Penh</p>
              </div>
            </div>
            <div className="d-flex p-4 rounded mb-4 bg-white">
              <i className="fas fa-envelope fa-2x text-primary me-4" />
              <div>
                <h4>Mail Us</h4>
                <p className="mb-2">yoengamra9@gmail.com</p>
              </div>
            </div>
            <div className="d-flex p-4 rounded bg-white">
              <i className="fa fa-phone-alt fa-2x text-primary me-4" />
              <div>
                <h4>Telephone</h4>
                <p className="mb-2">(+885) 976275756</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>
 {/* Contact End */}
  
</div>

  )
}

export default Contact