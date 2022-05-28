L.mapquest.key = 'cZUfpWxKOTLzsm73G13s9wpav8snkScf';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('hybrid'),
  zoom: 12
});

// 2. adding controll.
map.addControl(L.mapquest.control({ position : 'bottomright'}));

//3. adding icon.
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Manchester!')
.addTo(map);



