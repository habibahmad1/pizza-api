function dataMenu() {
  //! Ambil data json nya
  //! Dan jalankan fungsi json ke object
  $.getJSON("./data/pizza.json", (hasil) => {
    const menu = hasil.menu;

    // ! perulangan dengan jquery
    $.each(menu, (i, data) => {
      // ! tangkap id daftar-menu
      $("#daftar-menu").append(
        '<div class="col-md-4"><div class="card mb-3"><img src="./img/menu/' +
          data.gambar +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Buy Now!</a></div></div></div>'
      );
    });
  });
}

dataMenu();

//! Atur Navbar yg aktif
$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  // ! buat agar tulisan h1 berubah sesuai kategori
  const kategori = $(this).html();
  $("h1").html(kategori);

  // ! Kategori khusus All Menu
  if (kategori == "All Menus") {
    dataMenu();
    return;
  }

  //   ! agar data sesuai yang di klik di navbar
  $.getJSON("./data/pizza.json", function (data) {
    const menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card mb-3"><img src="./img/menu/' +
          data.gambar +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Buy Now!</a></div></div></div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});
