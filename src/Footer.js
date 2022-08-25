import React from "react";


export const Footer = () => {
    return (
     
     
        <div className="container "  style={{ marginTop : '200px'}} >
          <div className="footerImage justify-content-center  d-flex">
                    <p></p>
                    <img className="text-center img-fluid" src="./images/footerlogo.png" />
                    
                </div>
        <div className="footerMenu mb-5">
        
                
        <div className="footerMenu mt-12 mb-5  ">
          
                <div className="d-flex justify-content-around ">
                      <div className="menus d-flex flex-column  ">
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/"><b>Information</b></a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">About Us</a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">Mitao Bhook</a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">Privacy Policy</a>
                          
                        </div>
                          <div className="menus    d-flex flex-column ">
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/"><b>Food</b></a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">Our Secret Recipe</a>  
                        </div>
                          <div className="menus  d-flex flex-column  ">
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/"><b>locations</b></a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">Find a store</a>
                         
                        </div>
                          <div className="menus d-flex flex-column  ">
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/"><b>Get in touch</b></a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">Conatact</a>
                        <a className="box pe-3 " class="link-dark text-decoration-none" href="/">Join Us</a>
                        <a className="box " class="link-dark text-decoration-none" href="/">Terms  Conditions</a>  
                        </div>
                         
                </div>
                </div>
                </div> 

            </div>
            

    )
}
export default Footer;