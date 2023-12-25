# Mailer

Aplikasi Node.js sederhana yang menggunakan Nodemailer untuk mengirim email. Aplikasi ini memiliki dua fitur utama: pendaftaran pengguna menggunakan akun email uji coba dan pengiriman tagihan produk melalui akun Gmail yang sebenarnya.

## Langkah Awal

### Persyaratan

1. Pastikan Node.js telah terinstal di komputer Anda.

### Instalasi

1. Klon repositori:

    ```bash
    git clone https://github.com/usernameAnda/nodemailer-email-service.git
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd nodemailer-email-service
    ```

3. Install dependensi:

    ```bash
    npm install
    ```

### Konfigurasi

1. Dapatkan kredensial Gmail Anda (alamat email dan kata sandi).
2. Update file `env.js` dengan kredensial Gmail Anda:

    ```javascript
    module.exports = {
        EMAIL: 'emailAnda@gmail.com',
        PASSWORD: 'kata_sandi_anda'
    }
    ```

## Penggunaan Nodemailer

Nodemailer adalah pustaka Node.js yang sangat berguna untuk mengirim email. Dalam aplikasi ini, kami menggunakannya untuk mengirim email uji coba dan tagihan produk.

### Daftar Pengguna (Email Uji Coba)

1. Gunakan akun email uji coba:

    ```javascript
    const testAccount = await nodemailer.createTestAccount();
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

### Dapatkan Tagihan Produk (Email Gmail)

1. Konfigurasikan transporter menggunakan akun Gmail yang sebenarnya:

    ```javascript
    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL, // Dari file env.js
            pass: PASSWORD, // Dari file env.js
        }
    }

    let transporter = nodemailer.createTransport(config);
    ```

2. Buat pesan email untuk tagihan produk:

    ```javascript
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "fathur",
            link: 'https://mailgen.js/'
        }
    })

    let response = {
        // Detail pesan email
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: EMAIL,
        to: userEmail,
        subject: "Place Order",
        html: mail
    }
    ```

3. Kirim email tagihan produk:

    ```javascript
    transporter.sendMail(message).then(() => {
        // Handle respons sukses
    }).catch(error => {
        // Handle kesalahan
    });
    ```

## Catatan Penting

- Simpan kredensial email dengan aman dan hindari menyimpan kata sandi di file konfigurasi secara langsung.
- Aplikasi ini ditujukan untuk pembelajaran dan mungkin memerlukan penyesuaian untuk digunakan secara produksi.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](LICENSE) untuk detailnya.
