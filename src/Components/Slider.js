import React from 'react'


export const Slider = () => {
    return (
        <>
        <div className='container ' >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={6} aria-label="Slide 7" />
    

  </div>
  <div className="carousel-inner" style={{height  :'400px'}}>
    <div className="carousel-item active" >
      
      <img src="./images/slide1.png"  className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./images/slide2.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./images/slide3.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item " >
      <img src="./images/slide4.png"  className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./images/slide5.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./images/slide6.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item " >
      <img src="./images/slide7.jpg"  className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

</>
     )
}
export default Slider;
