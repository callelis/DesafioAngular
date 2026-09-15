const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

if (hamburgerBtn && sidebar && overlay) {
  hamburgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
}

const vehicles = {
    mustang: {
        image: "img/mustang.png",
        alt: "Ford Mustang",
        sales: 1500,
        connected: 500,
        software: 750,
        odometer: "50000 Km",
        fuel: "90 %",
        status: "on",
        lat: "-12,2322",
        lon: "-38,2314"
    },
    ranger: {
        image: "img/ranger.png",
        alt: "Ford Ranger",
        sales: 1800,
        connected: 620,
        software: 820,
        odometer: "62000 Km",
        fuel: "75 %",
        status: "off",
        lat: "-12,4500",
        lon: "-38,4500"
    },
    territory: {
        image: "img/territory.png",
        alt: "Ford Territory",
        sales: 2100,
        connected: 700,
        software: 900,
        odometer: "48000 Km",
        fuel: "88 %",
        status: "on",
        lat: "-13,0100",
        lon: "-38,5200"
    },
    bronco: {
        image: "img/bronco.png",
        alt: "Ford Bronco Sport",
        sales: 1700,
        connected: 580,
        software: 790,
        odometer: "54000 Km",
        fuel: "80 %",
        status: "on",
        lat: "-12,9800",
        lon: "-38,3000"
    }
};

const selectVehicle = document.getElementById("veiculo-select");
const imgVehicle = document.getElementById("car-img");
const totalVendas = document.getElementById("total-vendas");
const conectados = document.getElementById("conectados");
const updateSoftware = document.getElementById("update-software");
const odometro = document.getElementById("odometro");
const combustivel = document.getElementById("combustivel");
const status = document.getElementById("status");
const lat = document.getElementById("lat");
const long = document.getElementById("long");

function updateVehicleInfo(vehicleKey) {
    const vehicle = vehicles[vehicleKey];

    if (!vehicle) return;

    imgVehicle.src = vehicle.image;
    imgVehicle.alt = vehicle.alt;

    totalVendas.textContent = vehicle.sales;
    conectados.textContent = vehicle.connected;
    updateSoftware.textContent = vehicle.software;

    odometro.textContent = vehicle.odometer;
    combustivel.textContent = vehicle.fuel;
    status.textContent = vehicle.status;
    lat.textContent = vehicle.lat;
    long.textContent = vehicle.lon;
}

selectVehicle.addEventListener("change", (event) => {
    updateVehicleInfo(event.target.value);
});

    

updateVehicleInfo(selectVehicle.value);