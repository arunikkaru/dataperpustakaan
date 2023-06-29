// Fungsi untuk mengambil data dari Public API
async function getDataFromAPI() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Ganti URL dengan URL Public API yang Anda inginkan
      const data = response.data;
  
      // Tampilkan data di dalam elemen dengan id "data-container"
      const dataContainer = document.getElementById('data-container');
      dataContainer.innerHTML = JSCroot.stringify(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Panggil fungsi untuk mengambil data saat halaman dimuat
  getDataFromAPI();
  