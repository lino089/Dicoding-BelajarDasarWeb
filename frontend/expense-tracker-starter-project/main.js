/**
 * ========================================================
 * Expense Tracker App — main.js
 * ========================================================
 * Tulis seluruh kode JavaScript kamu di sini.
 */

// TODO [Basic] Buat variabel array untuk menyimpan semua data transaksi, contoh: let transactions = []
// TODO [Basic] Buat fungsi untuk menghasilkan ID unik secara otomatis, contoh: gunakan +new Date()
let transactions = [];
const generateId = () => +new Date();

/**
 * ========================================================
 * Kriteria 1: Memanipulasi DOM untuk Form dan Daftar Transaksi
 * ========================================================
 */
// TODO [Basic] Ambil elemen kontainer incomeList dan expenseList dari DOM
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");

/**
 * TODO [Basic]:
 * Buat fungsi untuk menampilkan (render) semua transaksi ke layar:
 *  - Kosongkan kontainer terlebih dahulu sebelum mengisi ulang
 *  - Gunakan perulangan, buat setiap elemen kartu dengan document.createElement()
 *  - Pastikan setiap elemen memiliki atribut data-testid yang sesuai (lihat panduan di rubrik)
 *  - Masukkan kartu ke kontainer yang tepat: income → incomeList, expense → expenseList
 */
function render() {
  incomeList.innerText = "";
  expenseList.innerText = "";
  for (let transaction of transactions) {
    const card = document.createElement("div");
    card.classList.add("tracker-transaction-item");
    card.setAttribute("data-testid", "transactionItem");

    const title = document.createElement("h4");
    title.classList.add("tracker-transaction-item__title");
    title.setAttribute("data-testid", "transactionItemTitle");
    title.innerText = transaction.title;

    const amount = document.createElement("p");
    amount.classList.add("tracker-transaction-item__amount");
    amount.setAttribute("data-testid", "transactionItemAmount");
    amount.innerText = `Rp ${Number(transaction.amount).toLocaleString("id-ID")}`;

    const date = document.createElement("p");
    date.classList.add("tracker-transaction-item__date");
    date.setAttribute("data-testid", "transactionItemDate");
    date.innerText = transaction.date;

    card.append(title, amount, date);

    if (transaction.type === "income") {
      incomeList.append(card);
    } else {
      expenseList.append(card);
    }

    updateDashboard();
  }
}

// TODO [Basic] Tambahkan event listener 'submit' pada form, panggil e.preventDefault() di dalamnya
// TODO [Basic] Di dalam handler submit, ambil nilai input lalu tambahkan sebagai objek transaksi baru ke array
const form = document.getElementById("transactionForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const transactionFormTitleInput = document.getElementById(
    "transactionFormTitleInput",
  ).value;
  const transactionFormAmountInput = Number(
    document.getElementById("transactionFormAmountInput").value,
  );
  const transactionFormDateInput = document.getElementById(
    "transactionFormDateInput",
  ).value;
  const transactionFormTypeSelect = document.getElementById(
    "transactionFormTypeSelect",
  ).value;

  if (transactionFormTitleInput === "") {
    alert("Masukan Judul");
    return;
  } else if (transactionFormAmountInput < 1) {
    alert("Minimal nominal transaksi adalah 1");
    return;
  }
  transactions.push({
    id: generateId(),
    title: transactionFormTitleInput,
    amount: Number(transactionFormAmountInput),
    date: transactionFormDateInput,
    type: transactionFormTypeSelect,
  });

  render();

  updateDashboard();

  form.reset();
});

/**
 * TODO [Skilled]:
 * Tambahkan validasi input sebelum menyimpan data:
 *  - Tampilkan alert() dan hentikan proses jika judul kosong
 *  - Tampilkan alert() dan hentikan proses jika nominal kurang dari 1
 */

/**
 * TODO [Advanced]:
 * Setiap kali data transaksi berubah, perbarui Panel Dasbor:
 *  - Hitung total pemasukan, total pengeluaran, dan saldo (pemasukan - pengeluaran)
 *  - Tampilkan hasilnya ke elemen yang sesuai di HTML
 */

function updateDashboard() {
  let totalIncome = 0;
  let totalExpense = 0;

  for(let transaction of transactions) {
    if (transaction.type === 'income'){
      totalIncome += Number(transaction.amount);
    } else if (transaction.type === 'expense'){
      totalExpense += Number(transaction.amount);
    }
  }

  const balance = totalIncome - totalExpense;

  const saldo = document.querySelector('.tracker-summary__balance-amount');
  const pemasukan = document.querySelector('.tracker-summary__stat-amount--income');
  const pengeluaran = document.querySelector('.tracker-summary__stat-amount--expense');

  saldo.innerText = `Rp${balance.toLocaleString("id-ID")}`;
  pemasukan.innerText = `Rp${totalIncome.toLocaleString("id-ID")}`;
  pengeluaran.innerText = `Rp${totalExpense.toLocaleString("id-ID")}`;
}

/**
 * ========================================================
 * Kriteria 2: Mengelola Penyimpanan Data (Web Storage API)
 * ========================================================
 */
/**
 * TODO [Basic]:
 * Data transaksi disimpan ke localStorage menggunakan JSON.stringify(), dan dimuat kembali saat halaman dibuka menggunakan JSON.parse().
 *  - Tombol "Hapus" berfungsi: transaksi yang dihapus langsung hilang dari layar dan dari localStorage.
 */

/**
 * TODO [Skilled]:
 * Tombol "Edit" berfungsi: saat ditekan, formulir (#transactionForm) secara otomatis terisi dengan data transaksi yang dipilih.
 *  - Pengguna dapat mengubah data lalu menyimpan perubahan.
 *  - Formulir kembali ke mode "Tambah" setelah pembaruan selesai.
 */

/**
 * TODO [Advanced]:
 * Gunakan Custom Event sebagai penghubung antara perubahan data dan pembaruan tampilan:
 *  - Kirim sinyal dengan document.dispatchEvent(new Event('transaction:updated')) setiap kali data berubah
 *  - Pasang satu listener untuk event tersebut yang memanggil fungsi render dan update dasbor
 */

/**
 * ========================================================
 * Kriteria 3: Fitur Interaktif (Pindah Kategori dan Pencarian)
 * ========================================================
 */
/**
 * TODO [Basic]:
 * Tambahkan tombol "Ubah Tipe" pada setiap kartu transaksi:
 *  - Saat diklik, ubah tipe transaksi: 'income' → 'expense' atau 'expense' → 'income'
 *  - Simpan perubahan ke localStorage dan perbarui tampilan
 */

/**
 * TODO [Skilled]:
 * Tambahkan event listener 'input' pada kolom pencarian:
 *  - Filter array transaksi berdasarkan kecocokan kata kunci dengan judul transaksi
 *  - Tampilkan hanya transaksi yang judulnya mengandung kata kunci tersebut
 */

/**
 * TODO [Advanced]:
 * Pastikan fitur pencarian berjalan dengan baik di semua kondisi:
 *  - Saat kolom pencarian dikosongkan, tampilkan kembali seluruh daftar transaksi
 */
