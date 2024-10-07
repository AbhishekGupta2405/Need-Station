const Review = () => {
  return <>
    <section className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div className="row">
        <div className="col-md-4">
          <blockquote className="blockquote text-center">
            <p className="mb-0">"The babysitting service is fantastic! My kids loved their caretaker."</p>
            <footer className="blockquote-footer" style={{margin: '5px'}}>Ajay Singh</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote text-center">
            <p className="mb-0">"We hired a household worker, and they were highly professional."</p>
            <footer className="blockquote-footer" style={{margin: '5px'}}>Smriti Sharma</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote text-center">
            <p className="mb-0">"Elder care services are top-notch. They provided excellent support."</p>
            <footer className="blockquote-footer" style={{margin: '5px'}}>Zoya Ansari</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
  </>
}

export default Review;