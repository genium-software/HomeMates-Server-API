
const types = {
    billingStatus:[
        'NOT PAID', // Tenant has not paid.
        'PENDING',  // Waiting for confirmation from Owner
        'PAID',     // Owner has confirmed payment
    ],
    roles:[
        'Owner',
        'Tenant'
    ],
    billingCategory: [
        'Rent',
        'Water',
        'Gas',
        'Electricity',
        'Internet',
    ]
}

module.exports = types