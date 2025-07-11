// Mapa de Calor com Leaflet + Heatmap
var map = L.map('map').setView([-23.55052, -46.633309], 13);

// Mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Mock de pontos [lat, long, intensidade]
var heatData = [
  [-23.55052, -46.633309, 0.8],
  [-23.552, -46.632, 0.7],
  [-23.554, -46.635, 0.9],
  [-23.549, -46.631, 0.6],
  [-23.556, -46.636, 0.75]
];

// Heatmap layer
L.heatLayer(heatData, { radius: 25 }).addTo(map);

// Gráfico Polar com Chart.js
var ctxPolar = document.getElementById('polarChart').getContext('2d');
var polarChart = new Chart(ctxPolar, {
  type: 'polarArea',
  data: {
    labels: ['00h', '01h', '02h', '03h', '04h', '05h'],
    datasets: [{
      label: 'Ocorrências por Hora',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0',
        '#9966ff',
        '#ff9f40'
      ]
    }]
  },
  options: {
    responsive: true
  }
});

// Gráfico de Pizza com Chart.js
var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Roubo', 'Furto', 'Assalto', 'Outros'],
    datasets: [{
      label: 'Ocorrências',
      data: [40, 30, 20, 10],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0'
      ]
    }]
  },
  options: {
    responsive: true
  }
});
