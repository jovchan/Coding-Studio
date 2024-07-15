{
    "nama": "John Doe",
    "umur": 30,
    "pekerjaan": "pengembang web"
  }

  local
  // Menyimpan Data
  localStorage.setItem("nama", "John Doe");

  // Mengambil Data
  const nama = localStorage.getItem("nama");

  session
  // Menyimpan Data
  sessionStorage.setItem("pekerjaan", "pengembang web");

  // Mengambil Data
  const pekerjaan = sessionStorage.getItem("pekerjaan");


  cookies
  // Menyimpan Data
  document.cookie = "username=John Doe; expires=Thu, 15 Jul 2025 12:00:00 UTC; path=/";

  // Mengambil Data
  const cookies = document.cookie;


  