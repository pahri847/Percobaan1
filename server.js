const http = require("http");
const RED = require("node-red");

// Buat server HTTP kosong
const server = http.createServer();

// Ambil port dari environment (Render kasih otomatis)
const port = process.env.PORT || 3000;

// Konfigurasi Node-RED
const settings = {
  httpAdminRoot: "/",    // editor Node-RED di root
  httpNodeRoot: "/",     // flow HTTP juga di root
  userDir: "./.nodered/" // folder data Node-RED (flows, dll)
};

// Inisialisasi Node-RED
RED.init(server, settings);

// Jalankan server
server.listen(port);

// Jalankan Node-RED
RED.start();
