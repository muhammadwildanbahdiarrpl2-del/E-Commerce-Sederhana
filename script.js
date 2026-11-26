// DATA PRODUK
    const produk = [
        {
            id: 1,
            nama: "Headphone",
            kategori: "Elektronik",
            harga: 150000,
            gambar: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            nama: "Smartphone",
            kategori: "Elektronik",
            harga: 2500000,
            gambar: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            nama: "Kaos",
            kategori: "Fashion",
            harga: 75000,
            gambar: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            nama: "Sepatu",
            kategori: "Fashion",
            harga: 200000,
            gambar: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            nama: "Jam Tangan",
            kategori: "Aksesoris",
            harga: 175000,
            gambar: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            nama: "Tas",
            kategori: "Aksesoris",
            harga: 125000,
            gambar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            nama: "Laptop",
            kategori: "Elektronik",
            harga: 8500000,
            gambar: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8,
            nama: "Kamera",
            kategori: "Elektronik",
            harga: 3200000,
            gambar: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9,
            nama: "Keyboard Mekanik",
            kategori: "Elektronik",
            harga: 450000,
            gambar: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 10,
            nama: "Dress Wanita",
            kategori: "Fashion",
            harga: 225000,
            gambar: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 11,
            nama: "Sneakers",
            kategori: "Fashion",
            harga: 350000,
            gambar: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 12,
            nama: "Kacamata",
            kategori: "Aksesoris",
            harga: 110000,
            gambar: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 13,
            nama: "Smartwatch",
            kategori: "Elektronik",
            harga: 980000,
            gambar: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 14,
            nama: "Tas Ransel",
            kategori: "Aksesoris",
            harga: 275000,
            gambar: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 15,
            nama: "Topi Fashion",
            kategori: "Fashion",
            harga: 90000,
            gambar: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 16,
            nama: "Earbuds",
            kategori: "Elektronik",
            harga: 325000,
            gambar: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 17,
            nama: "Dompet Kulit",
            kategori: "Aksesoris",
            harga: 145000,
            gambar: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 18,
            nama: "Jaket Hoodie",
            kategori: "Fashion",
            harga: 185000,
            gambar: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 19,
            nama: "Kaos Kaki",
            kategori: "Fashion",
            harga: 35000,
            gambar: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 20,
            nama: "Speaker Bluetooth",
            kategori: "Elektronik",
            harga: 420000,
            gambar: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 21,
            nama: "Mouse Gaming",
            kategori: "Elektronik",
            harga: 280000,
            gambar: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 22,
            nama: "Power Bank",
            kategori: "Elektronik",
            harga: 195000,
            gambar: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 23,
            nama: "Celana Jeans",
            kategori: "Fashion",
            harga: 260000,
            gambar: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 24,
            nama: "Kemeja Kasual",
            kategori: "Fashion",
            harga: 165000,
            gambar: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 25,
            nama: "Sandal",
            kategori: "Fashion",
            harga: 85000,
            gambar: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 26,
            nama: "Anting",
            kategori: "Aksesoris",
            harga: 65000,
            gambar: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 27,
            nama: "Gelang",
            kategori: "Aksesoris",
            harga: 95000,
            gambar: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 28,
            nama: "Kalung",
            kategori: "Aksesoris",
            harga: 120000,
            gambar: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 29,
            nama: "Cincin",
            kategori: "Aksesoris",
            harga: 155000,
            gambar: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 30,
            nama: "Sarung Tangan",
            kategori: "Aksesoris",
            harga: 55000,
            gambar: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
        }
    ];

    const jumlahPerHalaman = 24;
    let jumlahDitampilkan = jumlahPerHalaman;

    produk.push(
        {
            id: 31,
            nama: "Mug Keramik",
            kategori: "Rumah & Hobi",
            harga: 45000,
            gambar: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 32,
            nama: "Botol Minum",
            kategori: "Rumah & Hobi",
            harga: 85000,
            gambar: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 33,
            nama: "Buku Catatan",
            kategori: "Rumah & Hobi",
            harga: 55000,
            gambar: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 34,
            nama: "Parfum",
            kategori: "Kecantikan",
            harga: 225000,
            gambar: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 35,
            nama: "Paket Skincare",
            kategori: "Kecantikan",
            harga: 175000,
            gambar: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 36,
            nama: "Tanaman Hias",
            kategori: "Rumah & Hobi",
            harga: 65000,
            gambar: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 37,
            nama: "Lampu Meja",
            kategori: "Rumah & Hobi",
            harga: 145000,
            gambar: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 38,
            nama: "Kopi Premium",
            kategori: "Rumah & Hobi",
            harga: 95000,
            gambar: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 39,
            nama: "Sofa Minimalis",
            kategori: "Rumah & Hobi",
            harga: 1850000,
            gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 40,
            nama: "Sepeda",
            kategori: "Olahraga",
            harga: 2450000,
            gambar: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 41,
            nama: "Koper Kabin",
            kategori: "Aksesoris",
            harga: 650000,
            gambar: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 42,
            nama: "Buket Bunga",
            kategori: "Rumah & Hobi",
            harga: 120000,
            gambar: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 43,
            nama: "Set Makeup",
            kategori: "Kecantikan",
            harga: 165000,
            gambar: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 44,
            nama: "Payung Lipat",
            kategori: "Aksesoris",
            harga: 75000,
            gambar: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 45,
            nama: "Bola Basket",
            kategori: "Olahraga",
            harga: 185000,
            gambar: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 46,
            nama: "Kursi Santai",
            kategori: "Rumah & Hobi",
            harga: 850000,
            gambar: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 47,
            nama: "Peralatan Masak",
            kategori: "Rumah & Hobi",
            harga: 320000,
            gambar: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 48,
            nama: "Lilin Aromaterapi",
            kategori: "Rumah & Hobi",
            harga: 70000,
            gambar: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 49,
            nama: "Dumbbell",
            kategori: "Olahraga",
            harga: 210000,
            gambar: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 50,
            nama: "Gitar Akustik",
            kategori: "Rumah & Hobi",
            harga: 980000,
            gambar: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 51,
            nama: "Sepatu Futsal",
            kategori: "Olahraga",
            harga: 425000,
            gambar: "assets/sepatu-futsal.png"
        },
        {
            id: 52,
            nama: "Bola Sepak",
            kategori: "Olahraga",
            harga: 185000,
            gambar: "assets/bola-sepak.png"
        },
        {
            id: 53,
            nama: "Sepatu Basket",
            kategori: "Olahraga",
            harga: 675000,
            gambar: "assets/sepatu-basket.png"
        },
        {
            id: 54,
            nama: "Bola Voli",
            kategori: "Olahraga",
            harga: 160000,
            gambar: "assets/bola-voli.png"
        },
        {
            id: 55,
            nama: "Raket Badminton",
            kategori: "Olahraga",
            harga: 295000,
            gambar: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 56,
            nama: "Raket Tenis",
            kategori: "Olahraga",
            harga: 520000,
            gambar: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 57,
            nama: "Jersey Sepak Bola",
            kategori: "Olahraga",
            harga: 240000,
            gambar: "assets/jersey-sepak-bola.png"
        },
        {
            id: 58,
            nama: "Matras Yoga",
            kategori: "Olahraga",
            harga: 175000,
            gambar: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 59,
            nama: "Helm Sepeda",
            kategori: "Olahraga",
            harga: 350000,
            gambar: "assets/helm-sepeda.png"
        },
        {
            id: 60,
            nama: "Bet Tenis Meja",
            kategori: "Olahraga",
            harga: 125000,
            gambar: "https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 61,
            nama: "Sepatu Bola F50 Lamine Yamal",
            kategori: "Olahraga",
            harga: 3420000,
            gambar: "assets/sepatu-bola-yamal.png"
        }
    );

    const deskripsiKategori = {
        Elektronik: "Perangkat praktis untuk menunjang produktivitas dan hiburan sehari-hari.",
        Fashion: "Pilihan gaya nyaman untuk menemani aktivitas dan penampilan harian.",
        Aksesoris: "Pelengkap praktis yang memadukan fungsi dan gaya.",
        "Rumah & Hobi": "Pilihan menarik untuk melengkapi rumah dan waktu luang.",
        Kecantikan: "Teman praktis untuk rutinitas perawatan dan penampilan.",
        Olahraga: "Perlengkapan pilihan untuk mendukung latihan dan aktivitas aktif."
    };

    produk.forEach(function(item, index) {
        item.deskripsi = `${item.nama} ${deskripsiKategori[item.kategori]}`;
        item.rating = Number((4.3 + (index % 7) / 10).toFixed(1));
        item.terjual = 24 + (index * 37) % 470;
        item.stok = 8 + (index * 13) % 43;
    });

    document.getElementById("productTotal").textContent =
        produk.length.toLocaleString("id-ID");

    const stokTersimpan = JSON.parse(
        localStorage.getItem("stokProduk") || "{}"
    );

    produk.forEach(function(item) {
        if (Number.isInteger(stokTersimpan[item.id]) && stokTersimpan[item.id] >= 0) {
            item.stok = stokTersimpan[item.id];
        }
    });

    // DATA KERANJANG
    let keranjang = JSON.parse(
        localStorage.getItem("keranjang") || "[]"
    );

    let voucherAktif = false;
    let toastTimer;

    function tampilkanToast(pesan) {
        const toast = document.getElementById("toast");
        toast.textContent = pesan;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
    }

    // FORMAT RUPIAH
    function rupiah(angka) {
        return "Rp" + angka.toLocaleString("id-ID");
    }

    function escapeHtml(teks) {
        return String(teks).replace(/[&<>"']/g, function(karakter) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[karakter];
        });
    }

    function stokTersedia(id) {
        const barang = produk.find(p => p.id === id);
        const itemDiKeranjang = keranjang.find(p => p.id === id);
        const jumlahDiKeranjang = itemDiKeranjang ? itemDiKeranjang.jumlah : 0;
        return Math.max(0, barang.stok - jumlahDiKeranjang);
    }

    // MENAMPILKAN PRODUK
    function tampilkanProduk(resetHalaman = false) {
        if (resetHalaman) {
            jumlahDitampilkan = jumlahPerHalaman;
        }

        const kolomCari = document.getElementById("search");
        const keyword = kolomCari.value.trim().toLowerCase();
        document.getElementById("searchClear").hidden = keyword.length === 0;

        const kategori = document.getElementById("category").value;
        const urutan = document.getElementById("sort").value;

        const hasil = produk.filter(function(item) {
            const cocokNama = item.nama.toLowerCase()
                .includes(keyword);

            const cocokKategori = kategori === "Semua" ||
                item.kategori === kategori;

            return cocokNama && cocokKategori;
        });

        if (urutan === "termurah") {
            hasil.sort((a, b) => a.harga - b.harga);
        } else if (urutan === "termahal") {
            hasil.sort((a, b) => b.harga - a.harga);
        } else if (urutan === "nama") {
            hasil.sort((a, b) => a.nama.localeCompare(b.nama, "id"));
        }

        const tempat = document.getElementById("products");
        const jumlahSaatIni = Math.min(jumlahDitampilkan, hasil.length);
        document.getElementById("resultCount").textContent =
            `${hasil.length.toLocaleString("id-ID")} produk ditemukan • menampilkan ${jumlahSaatIni.toLocaleString("id-ID")}`;

        if (hasil.length === 0) {
            tempat.innerHTML = `
                <div class="empty-state">
                    <strong>Produk tidak ditemukan</strong>
                    <p>Coba kata kunci lain atau tampilkan semua produk.</p>
                    <button class="detail-button" type="button"
                        onclick="resetFilterProduk()">Tampilkan semua produk</button>
                </div>
            `;
            document.getElementById("loadMoreButton").style.display = "none";
            return;
        }

        tempat.innerHTML = hasil.slice(0, jumlahDitampilkan).map(function(item) {
            const stok = stokTersedia(item.id);

            return `
                <div class="product">
                    <img src="${item.gambar}" alt="${item.nama}"
                         loading="lazy"
                         onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;600&quot; height=&quot;400&quot;><rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;%23eef2f7&quot;/><text x=&quot;50%&quot; y=&quot;50%&quot; dominant-baseline=&quot;middle&quot; text-anchor=&quot;middle&quot; fill=&quot;%2364748b&quot; font-family=&quot;Arial&quot; font-size=&quot;28&quot;>${item.nama}</text></svg>');">
                    ${item.kreditGambar ? `
                        <p class="image-credit">
                            <a href="${item.kreditGambar.url}" target="_blank"
                               rel="noopener noreferrer">${item.kreditGambar.teks}</a>
                        </p>
                    ` : ""}

                    <h3>${item.nama}</h3>

                    <p class="category">${item.kategori}</p>

                    <p class="product-rating">
                        <span class="rating-stars" aria-hidden="true">★</span>
                        <strong>${item.rating}</strong>
                        <span>(${item.terjual} terjual)</span>
                    </p>

                    <p class="product-stock ${stok === 0 ? "out-of-stock" : ""}">
                        ${stok === 0 ? "Stok habis" : `${stok} tersedia`}
                    </p>

                    <p class="price">${rupiah(item.harga)}</p>

                    <div class="product-actions">
                        <button class="detail-button" type="button"
                            onclick="bukaDetailProduk(${item.id})">
                            Lihat Detail
                        </button>

                        <button class="add-button" type="button"
                            onclick="tambahKeranjang(${item.id})"
                            ${stok === 0 ? "disabled" : ""}>
                            ${stok === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
                        </button>
                    </div>
                </div>
            `;
        }).join("");

        document.getElementById("loadMoreButton").style.display =
            hasil.length > jumlahDitampilkan ? "block" : "none";
    }

    function resetFilterProduk() {
        document.getElementById("search").value = "";
        document.getElementById("category").value = "Semua";
        document.getElementById("sort").value = "default";
        tampilkanProduk(true);
        document.getElementById("search").focus();
    }

    function bukaDetailProduk(id) {
        const item = produk.find(p => p.id === id);
        const stok = stokTersedia(id);

        document.getElementById("productDetail").innerHTML = `
            <div class="product-detail-layout">
                <img src="${item.gambar}" alt="${item.nama}"
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;600&quot; height=&quot;400&quot;><rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;%23eef2f7&quot;/><text x=&quot;50%&quot; y=&quot;50%&quot; dominant-baseline=&quot;middle&quot; text-anchor=&quot;middle&quot; fill=&quot;%2364748b&quot; font-family=&quot;Arial&quot; font-size=&quot;28&quot;>${item.nama}</text></svg>');">
                <div class="product-detail-info">
                    <p class="category">${item.kategori}</p>
                    <h2 id="detailTitle">${item.nama}</h2>
                    <p class="product-rating">
                        <span class="rating-stars" aria-hidden="true">★</span>
                        <strong>${item.rating}</strong>
                        <span>(${item.terjual} terjual)</span>
                    </p>
                    <p class="product-detail-description">${item.deskripsi}</p>
                    ${item.kreditGambar ? `
                        <p class="image-credit">
                            <a href="${item.kreditGambar.url}" target="_blank"
                               rel="noopener noreferrer">${item.kreditGambar.teks}</a>
                        </p>
                    ` : ""}
                    <p class="product-stock ${stok === 0 ? "out-of-stock" : ""}">
                        ${stok === 0 ? "Stok habis" : `Stok tersedia: ${stok} unit`}
                    </p>
                    <p class="product-detail-price">${rupiah(item.harga)}</p>
                    <button class="add-button" type="button"
                        onclick="tambahKeranjang(${item.id}); tutupDetailProduk()"
                        ${stok === 0 ? "disabled" : ""}>
                        ${stok === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
                    </button>
                </div>
            </div>
        `;

        const modal = document.getElementById("productDetailModal");
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
    }

    function tutupDetailProduk() {
        const modal = document.getElementById("productDetailModal");
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }

    function tampilkanLebihBanyak() {
        jumlahDitampilkan += jumlahPerHalaman;
        tampilkanProduk();
    }

    // MENAMBAHKAN PRODUK
    function tambahKeranjang(id) {
        const barang = produk.find(p => p.id === id);
        const item = keranjang.find(function(p) {
            return p.id === id;
        });

        if (!barang) return;

        if ((item ? item.jumlah : 0) >= barang.stok) {
            tampilkanToast("Stok produk tidak mencukupi");
            return;
        }

        if (item) {
            item.jumlah++;
        } else {
            keranjang.push({
                id: id,
                jumlah: 1
            });
        }

        simpanKeranjang();
        tampilkanKeranjang();
        tampilkanProduk();
        tampilkanToast(`${barang.nama} ditambahkan ke keranjang`);
    }

    // MENYIMPAN KERANJANG
    function simpanKeranjang() {
        localStorage.setItem(
            "keranjang",
            JSON.stringify(keranjang)
        );
    }

    // MENGHITUNG SUBTOTAL
    function hitungSubtotal() {
        return keranjang.reduce(function(total, item) {
            const barang = produk.find(p => p.id === item.id);

            return total + barang.harga * item.jumlah;
        }, 0);
    }

    // MENGHITUNG DISKON
    function hitungDiskon() {
        if (voucherAktif && hitungSubtotal() > 0) {
            return hitungSubtotal() * 0.10;
        }

        return 0;
    }

    // MENAMPILKAN KERANJANG
    function tampilkanKeranjang() {
        const tempat = document.getElementById("cartItems");

        if (keranjang.length === 0) {
            tempat.innerHTML = `
                <div class="cart-empty">
                    <span class="cart-empty-icon" aria-hidden="true">🛒</span>
                    <h3>Keranjangmu masih kosong</h3>
                    <p>Yuk, temukan produk yang kamu suka.</p>
                    <a class="browse-button" href="#products">Mulai belanja</a>
                </div>
            `;
        } else {
            tempat.innerHTML = keranjang.map(function(item) {
                const barang = produk.find(p => p.id === item.id);

                return `
                    <article class="cart-item">
                        <img class="cart-thumb" src="${barang.gambar}"
                             alt="${barang.nama}" loading="lazy">
                        <div class="cart-item-info">
                            <strong>${barang.nama}</strong>
                            <p class="cart-unit-price">${rupiah(barang.harga)} / item</p>
                            ${barang.kreditGambar ? `
                                <a class="image-credit"
                                   href="${barang.kreditGambar.url}" target="_blank"
                                   rel="noopener noreferrer">${barang.kreditGambar.teks}</a>
                            ` : ""}
                            <div class="cart-quantity">
                                <button type="button"
                                    onclick="ubahJumlah(${item.id}, -1)"
                                    aria-label="Kurangi ${barang.nama}"
                                    ${item.jumlah <= 1 ? "disabled" : ""}>−</button>
                                <span>${item.jumlah}</span>
                                <button type="button"
                                    onclick="ubahJumlah(${item.id}, 1)"
                                    aria-label="Tambah ${barang.nama}"
                                    ${item.jumlah >= barang.stok ? "disabled" : ""}>+</button>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <strong class="cart-line-total">
                                ${rupiah(barang.harga * item.jumlah)}
                            </strong>
                            <button class="remove-button" type="button"
                                    onclick="hapusBarang(${item.id})"
                                    aria-label="Hapus ${barang.nama}">
                            Hapus
                            </button>
                        </div>
                    </article>
                `;
            }).join("");
        }

        const keranjangKosong = keranjang.length === 0;
        document.getElementById("cartSummaryPanel").hidden = keranjangKosong;
        document.getElementById("checkoutButton").disabled = keranjangKosong;

        const subtotal = hitungSubtotal();
        const diskon = hitungDiskon();
        const total = subtotal - diskon;

        document.getElementById("subtotal").textContent =
            rupiah(subtotal);

        document.getElementById("diskon").textContent =
            rupiah(diskon);

        document.getElementById("total").textContent =
            rupiah(total);

        document.getElementById("cartCount").textContent =
            keranjang.reduce((jumlah, item) => jumlah + item.jumlah, 0);
        document.getElementById("cartSummary").textContent =
            `${keranjang.reduce((jumlah, item) => jumlah + item.jumlah, 0)} item`;
    }

    // MENGUBAH JUMLAH PRODUK DI KERANJANG
    function ubahJumlah(id, perubahan) {
        const item = keranjang.find(function(p) {
            return p.id === id;
        });

        if (!item) return;

        const barang = produk.find(p => p.id === id);
        if (perubahan > 0 && item.jumlah >= barang.stok) {
            tampilkanToast("Stok produk tidak mencukupi");
            return;
        }

        if (perubahan < 0 && item.jumlah <= 1) return;

        item.jumlah += perubahan;

        simpanKeranjang();
        tampilkanKeranjang();
        tampilkanProduk();
    }

    // MENGHAPUS PRODUK
    function hapusBarang(id) {
        keranjang = keranjang.filter(function(item) {
            return item.id !== id;
        });

        simpanKeranjang();
        tampilkanKeranjang();
        tampilkanProduk();
    }

    // VOUCHER DISKON
    function gunakanVoucher() {
        const kode = document.getElementById("voucher")
            .value.trim().toUpperCase();
        const pesanVoucher = document.getElementById("voucherMessage");

        if (kode === "HEMAT10") {
            voucherAktif = true;
            pesanVoucher.textContent = "Voucher HEMAT10 aktif — diskon 10%.";
            pesanVoucher.className = "voucher-message success";
        } else {
            voucherAktif = false;
            pesanVoucher.textContent = kode
                ? "Kode voucher tidak valid. Periksa kembali kodenya."
                : "Masukkan kode voucher terlebih dahulu.";
            pesanVoucher.className = "voucher-message error";
        }

        tampilkanKeranjang();
    }

    // SCROLL KE KERANJANG
    function scrollKeranjang() {
        document.getElementById("keranjang")
            .scrollIntoView({ behavior: "smooth" });
    }

    // MEMBUKA CHECKOUT
    function bukaCheckout() {
        if (keranjang.length === 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        const subtotal = hitungSubtotal();
        const diskon = hitungDiskon();
        document.getElementById("checkoutSubtotal").textContent =
            rupiah(subtotal);
        document.getElementById("checkoutDiscount").textContent =
            rupiah(diskon);
        document.getElementById("checkoutTotal").textContent =
            rupiah(subtotal - diskon);
        document.getElementById("checkoutModal")
            .style.display = "flex";
    }

    function tutupCheckout() {
        document.getElementById("checkoutModal")
            .style.display = "none";
    }

    // PROSES CHECKOUT
    document.getElementById("checkoutForm")
        .addEventListener("submit", function(event) {
            event.preventDefault();

            const nama = escapeHtml(document.getElementById("nama").value.trim());
            const alamat = escapeHtml(document.getElementById("alamat").value.trim());
            const telepon = escapeHtml(document.getElementById("telepon").value.trim());

            const nomorInvoice = "INV-" + Date.now();

            const subtotal = hitungSubtotal();
            const diskon = hitungDiskon();
            const total = subtotal - diskon;

            const tanggal = new Date().toLocaleDateString("id-ID");

            const daftarBarang = keranjang.map(function(item) {
                const barang = produk.find(p => p.id === item.id);

                return `
                    <p>${barang.nama} x ${item.jumlah}
                    = ${rupiah(barang.harga * item.jumlah)}</p>
                `;
            }).join("");

            document.getElementById("invoice").innerHTML = `
                <p><strong>Nomor:</strong> ${nomorInvoice}</p>
                <p><strong>Tanggal:</strong> ${tanggal}</p>
                <hr>
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Alamat:</strong> ${alamat}</p>
                <p><strong>Telepon:</strong> ${telepon}</p>
                <hr>
                <h3>Detail Produk</h3>
                ${daftarBarang}
                <hr>
                <p>Subtotal: ${rupiah(subtotal)}</p>
                <p>Diskon: ${rupiah(diskon)}</p>
                <h3>Total produk (belum termasuk ongkir): ${rupiah(total)}</h3>
                <p>Status: Pesanan simulasi berhasil. Pembayaran dan pengiriman belum diproses.</p>
            `;

            // Simpan invoice terakhir
            localStorage.setItem(
                "invoiceTerakhir",
                document.getElementById("invoice").innerHTML
            );

            keranjang.forEach(function(item) {
                const barang = produk.find(p => p.id === item.id);
                barang.stok -= item.jumlah;
                barang.terjual += item.jumlah;
            });

            const stokTerbaru = produk.reduce(function(stok, item) {
                stok[item.id] = item.stok;
                return stok;
            }, {});
            localStorage.setItem("stokProduk", JSON.stringify(stokTerbaru));

            // Kosongkan keranjang setelah checkout
            keranjang = [];
            voucherAktif = false;

            simpanKeranjang();
            tampilkanKeranjang();
            tampilkanProduk();

            document.getElementById("checkoutModal")
                .style.display = "none";

            document.getElementById("invoiceModal")
                .style.display = "flex";

            document.getElementById("checkoutForm").reset();
            document.getElementById("voucher").value = "";
        });

    // TUTUP INVOICE
    function tutupInvoice() {
        document.getElementById("invoiceModal")
            .style.display = "none";
    }

    // JALANKAN SAAT WEBSITE DIBUKA
    tampilkanProduk();
    tampilkanKeranjang();
