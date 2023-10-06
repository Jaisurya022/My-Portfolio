

export default function HeroSection() {
    return (
    
         <section id="heroSection" className="hero--section" >
             
         <div className="hero--section--content--box">
           
           <div className="hero--scetion--content">
              <p className="section--title"> Hey I'M Jai Surya</p>
              <h1 className="hero--section--title">
              <span className="hero--section--title--color">Front-End </span>{" "}
              <br />
              Developer
              </h1>
              <br />
              <p className="hero--section--title--description">
              The creating, building, and maintaining of websites.                <br />

              </p>
           </div>
               <button className="btn btn-primary" i>Get In Touch</button>
         </div>

         <div className="hero--section--img">
            <img src="public/img/Myimg.png" alt="Hero Section" />
         </div>

         </section>

    )
}