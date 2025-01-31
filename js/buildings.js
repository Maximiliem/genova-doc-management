// buildings.js
function loadBuildings() {
    db.collection('buildings').get()
        .then(snapshot => {
            let html = '<h2>Edificios</h2><button onclick="showNewBuildingForm()">Nuevo Edificio</button>';
            
            snapshot.forEach(doc => {
                const building = doc.data();
                html += `
                    <div class="building">
                        <h3>${building.name}</h3>
                        <p>${building.address}</p>
                    </div>
                `;
            });
            
            document.getElementById('content').innerHTML = html;
        });
}

function showNewBuildingForm() {
    const form = `
        <h3>Nuevo Edificio</h3>
        <input type="text" id="building-name" placeholder="Nombre">
        <input type="text" id="building-address" placeholder="Dirección">
        <button onclick="saveBuilding()">Guardar</button>
    `;
    document.getElementById('content').innerHTML = form;
}

function saveBuilding() {
    const name = document.getElementById('building-name').value;
    const address = document.getElementById('building-address').value;

    db.collection('buildings').add({
        name: name,
        address: address,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        loadBuildings(); // Recargar la lista
    });
}