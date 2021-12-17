import React from "react";


export default function Home() {
    return (
        <React.Fragment>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark shadow-sm" style={{background: "#15477a"}}>
      <div class="container">
        <a class="navbar-brand" href="#!">Cherry MX Brown</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="catalog.html">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html">Login</a>
            </li>
          </ul>



          <img src={"assets/img/moon.png"} id="icon" alt="description of image"/>





          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>


    <div class="wrapper">
      <section id="home">
        <img src={"assets/img/1.png"} alt="description of image"/>
        <div class="row text-center mb-5">
          <div class="kolom">
            <p class="deskripsi">Welcome to CHERRY MX BROWN</p>
            <h2>E-Commerce buatan mahasiswa ITK</h2>
            <p>Cherry MX Brown merupakan e-commerce yang menjual keyboard mechanical yang keren banget loh! Beli kuy!</p>
            <p><a href="#!" class="tbl-home">Visit Us</a></p>
          </div>
        </div>
      </section>


      <section id="product">
        <div class="tengah">
          <div class="row text-center mb-5">
            <div class="kolom">
              <h2>Rekomendasi</h2>
              <p>Ingin mencari keyboard untuk melengkapi set gaming gear atau set kantor kalian? </p>
              <p>Kami menyediakan berbagai keyboard gaming yang tentunya bisa kalian cek dengan klik tombol dibawah ini.</p>
              <p><a href="catalog.html" class="tbl-product">Visit Us</a></p>
            </div>
          </div>
        </div>
      </section>


      <section id="Testimoni">
        <div class="tengah mb-5">
          <div class="kolom">
            <p class="deksripsi"></p>
            <h2>Testimoni</h2>
            <p>Testimoni produk kami</p>
          </div>
          <div class="list-testi">
            <div class="kartu-testi">
              <img src={"https://image.freepik.com/free-vector/organic-flat-feedback-concept_23-2148957031.jpg"} alt="description of image"/>
              <p>Pelanggan 1</p>
            </div>
            <div class="kartu-testi">
              <img src={"https://image.freepik.com/free-vector/organic-flat-feedback-concept_23-2148957031.jpg"} alt="description of image"/>
              <p>Pelanggan 2</p>
            </div>
            <div class="kartu-testi">
              <img src={"https://image.freepik.com/free-vector/organic-flat-feedback-concept_23-2148957031.jpg"} alt="description of image"/>
              <p>Pelanggan 3</p>
            </div>
            <div class="kartu-testi">
              <img src={"https://image.freepik.com/free-vector/organic-flat-feedback-concept_23-2148957031.jpg"} alt="description of image"/>
              <p>Pelanggan 4</p>
            </div>
          </div>
        </div>
      </section>




      <section id="about">
        <div class="tengah mb-5">
          <div class="kolom">
            <h2 class="deksripsi">About Us</h2>
            <h3>CHERRY MX BROWN</h3>
            <p>CHERRY MX BROWN adalah nama team kami dan brand kami yang bergerak di bidang E-Commerce. Website ini kami dirikan sebagai sarana penjualan keyboard mechanical. Catalog kami menyediakan berbagai keyboard untuk kebutuhan yang beragam, mulai dari office work keyboard untuk pekerja maupun mahasiswa, hingga gaming keyboard untuk para gamers maupun kolektor keyboard.</p>
          </div>
        </div>
      </section>


      <section id="contact">
        <div class="wrapper">
          <div class="footer">
            <div class="footer-section">
              <h3>CEO</h3>
              <img src={""} alt="description of image"/>
              <p>I Gusti Bagus Fajar Prasetya</p>
            </div>
            <div class="footer-section">
              <h3>Contact</h3>
              <p>Telp +6281295725921</p>
            </div>
            <div class="footer-section">
              <h3>Address</h3>
              <p>PT. CHERRY MX BROWN</p>
              <p>Office: Institut Teknologi Kalimantan</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="copyright">
      <div class="wrapper">&copy; 2021. <b>Cherry MX Brown.</b> Do not distribute!.</div>
    </div>


    <script src="main.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </React.Fragment>
    )
}