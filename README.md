# Mailer

Aplikasi Node.js sederhana yang menggunakan Nodemailer untuk mengirim email. Aplikasi ini memiliki dua fitur utama: pendaftaran pengguna menggunakan akun email uji coba dan pengiriman pesan melalui akun Gmail yang sebenarnya.

## Langkah Awal

### Persyaratan

1. install node.js

### Instalasi

1. Klon repositori:

    ```bash
    git clone https://github.com/fathur021/mailer.git
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd mailer
    ```

3. Install dependensi:

    ```bash
    npm install express nodemailer 
    ```

### Konfigurasi

1. Dapatkan kredensial Gmail Anda (alamat email dan kata sandi).
2. Update file `env.js` dengan kredensial Gmail Anda:

    ```javascript
    module.exports = {
        EMAIL: 'tugasfathur79@gmail.com',
        PASSWORD: 'vewwhgvpnyqlporc' / di dapatkan dari email
    }
    ```

## Penggunaan Nodemailer

Nodemailer adalah pustaka Node.js yang sangat berguna untuk mengirim email. Dalam aplikasi ini, kami menggunakannya untuk mengirim email uji coba dan tagihan produk.

### Daftar Pengguna (Email Uji Coba)

1. Gunakan akun email uji coba:

    ```javascript
    let testAccount = await nodemailer.createTestAccount();
    ```

2. Konfigurasikan transporter menggunakan akun uji coba:

    ```javascript
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });
    ```

3. Kirim email uji coba:

    ```javascript
    transporter.sendMail(message).then((info) => {
        // Handle respons dan preview URL
    }).catch(error => {
        // Handle kesalahan
    });
    ```

 




