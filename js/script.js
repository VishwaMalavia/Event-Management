function openGalleryModal(image) {
    document.getElementById('modalImage').src = image.src;
}

form = (event) => {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById('reviewerName').value;// Get input values
    const review = document.getElementById('reviewText').value;
    // Create new review card
    const newReview = document.createElement('div');
    newReview.className = 'col-md-4 mb-2';
    newReview.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">"${review}"</p>
                </div>
            </div>
        `;
    document.getElementById('reviewsContainer').querySelector('.row').appendChild(newReview);
    document.getElementById('reviewForm').reset();
}

function filterEvents(category) {
    let events = document.querySelectorAll('.event-item');
    events.forEach(event => {
        if (category === 'all') {
            event.style.display = "block";
        } else {
            if (event.classList.contains(category)) {
                event.style.display = "block";
            } else {
                event.style.display = "none";
            }
        }
    });

    // Update active button style
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="filterEvents('${category}')"]`).classList.add('active');
}

function showPricing(serviceType) {
    let guests = parseInt(document.getElementById("guests").value) || 0;
    let duration = parseInt(document.getElementById("eventDuration").value) || 0;

    let serviceCosts = {
        catering: guests * 500 +`<br>basic catering cost is 500 per guest.cost will also change depending on the menu`,       
        decoration: 25000 + `<br> strating decoration price is 25000 depeneds on required of decoration`,            
        photography: duration * 4000, 
        venue: duration * 50000+ `<br> strating venue price is 50000 depeneds on location of venue`,     
        entertainment: duration * 8000,
        Lighting: duration * 3000
    };

    let message = "";
    if (serviceType === "catering" && guests > 0) {
        message = `For ${guests} guests, the catering cost is <b>₹${serviceCosts.catering}</b>.`;
    } else if (serviceType !== "catering" && duration > 0) {
        message = `For ${duration} hours, the ${serviceType} cost is <b>₹${serviceCosts[serviceType]}</b>.`;
    } else {
        message = `Please enter valid guest count or duration for accurate pricing.`;
    }

    document.getElementById('pricingDetails').innerHTML = `
        <div class="list-group-item">
            <h4>${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}</h4>
            <p>${message}</p>
        </div>
    `;
}

function calculateTotalPricing() {
    let guests = parseInt(document.getElementById("guests").value);
    let duration = parseInt(document.getElementById("eventDuration").value);

    if (!guests || !duration) {
        alert("Please fill in all details.");
        return;
    }

    let serviceCosts = {
        catering: guests * 500,       
        decoration: 25000,            
        photography: duration * 4000, 
        venue: duration * 50000,      
        entertainment: duration * 8000, 
        Lighting: duration * 3000   
    };

    let totalCost = Object.values(serviceCosts).reduce((sum, cost) => sum + cost, 0);

    document.getElementById('pricingDetails').innerHTML = `
        <div class="list-group-item">
            <h4>Total Estimated Cost</h4>
            <p>For ${guests} guests and ${duration} hours, the estimated total cost is <b>₹${totalCost}</b>.</p>
        </div>
    `;
}

