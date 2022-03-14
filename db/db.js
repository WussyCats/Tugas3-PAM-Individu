const Jadwal = [
    {
        jadwal_id: "001",
        bandara_kode_keberangkatan: "DJJ",
        bandara_kode_tujuan: "KOE",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "002",
        bandara_kode_keberangkatan: "DJJ",
        bandara_kode_tujuan: "KOE",
        maskapai_id: "SA",
    },
    {
        jadwal_id: "003",
        bandara_kode_keberangkatan: "DJJ",
        bandara_kode_tujuan: "KOE",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "004",
        bandara_kode_keberangkatan: "KNO",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "005",
        bandara_kode_keberangkatan: "KNO",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "006",
        bandara_kode_keberangkatan: "KNO",
        bandara_kode_tujuan: "SUB",
        maskapai_id: "LA",
    },
    {
        jadwal_id: "007",
        bandara_kode_keberangkatan: "KOE",
        bandara_kode_tujuan: "DJJ",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "008",
        bandara_kode_keberangkatan: "KOE",
        bandara_kode_tujuan: "DJJ",
        maskapai_id: "CL",
    },
    {
        jadwal_id: "009",
        bandara_kode_keberangkatan: "SUB",
        bandara_kode_tujuan: "KNO",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "010",
        bandara_kode_keberangkatan: "SUB",
        bandara_kode_tujuan: "KNO",
        maskapai_id: "CL",
    },
]

const Maskapai = [
    {
        maskapai_id: "GA",
        maskapai_nama: "Garuda Indonesia",
        maskapai_logo: require('../src/assets/images/Garuda.png'),
    },
    {
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",
        maskapai_logo: require('../src/assets/images/Lion.png'),
    },
    {
        maskapai_id: "SA",
        maskapai_nama: "Sriwijaya Air",
        maskapai_logo: require('../src/assets/images/Sriwijaya.png'),
    },
    {
        maskapai_id: "BA",
        maskapai_nama: "Batik Air",
        maskapai_logo: require('../src/assets/images/Batik.png'),
    },
    {
        maskapai_id: "CL",
        maskapai_nama: "Citilink",
        maskapai_logo: require('../src/assets/images/Citilink.png'),
    },
    {
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",
        maskapai_logo: require('../src/assets/images/AirAsia.png'),
    },
]

const Bandara = [
    {
        bandara_kode: "KNO",
        bandara_nama: "Kualanamu",
    },
    {
        bandara_kode: "DJJ",
        bandara_nama: "Sentani",
    },
    {
        bandara_kode: "SUB",
        bandara_nama: "Juanda",
    },
    {
        bandara_kode: "KOE",
        bandara_nama: "El Tari",
    },
]

export {Maskapai, Bandara, Jadwal}