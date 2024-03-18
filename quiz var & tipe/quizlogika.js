/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
    let result;
    if( score >= 90 ) /*artinya => angka yang lebih besar dan sama dengan 90 - seterus nya, akan mengubah nilai result menjadi, Output: 'Selamat! Anda mendapatkan nilai A.'*/ {
        result = 'Selamat! Anda mendapatkan nilai A.'
    } else if( score >= 80 ) /*artinya => angka yang lebih besar dan sama dengan 80 - 90, akan mengubah nilai result menjadi, Output: 'Anda mendapatkan nilai B.'*/ {
        result = 'Anda mendapatkan nilai B.'
    } else if( score >= 70 ) /*artinya => angka yang lebih besar dan sama dengan 70 - 80, akan mengubah nilai result menjadi, Output: 'Anda mendapatkan nilai C.'*/ {
        result = 'Anda mendapatkan nilai C.'
    } else if( score >= 60 ) /*artinya => angka yang lebih besar dan sama dengan 60 - 70, akan mengubah nilai result menjadi, Output: 'Anda mendapatkan nilai D.'*/ {
        result = 'Anda mendapatkan nilai D.'
    } else /*artinya => angka yang selain dari kondisi flow di atas yaitu angka 59- 0, akan mengubah nilai result menjadi, Output: 'Anda mendapatkan nilai E.'*/{
        result = 'Anda mendapatkan nilai E'
    }
    // TODO
  
  
  
    // Jangan hapus kode ini
    return result;
  }
  console.log(scoreChecker(88))
  /**
   * Jangan hapus kode di bawah ini
   */
  module.exports = scoreChecker;