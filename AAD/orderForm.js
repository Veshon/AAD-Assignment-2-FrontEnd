async function loadCustomers() {
    try {
        // Fetch customer data from the Spring MVC endpoint
        const response = await fetch('http://localhost:8080/aad/api/v1/customers');
        const customers = await response.json();

        // Get the select element by its ID
        const customerSelect = document.getElementById('cusId');

        // Populate the select element with customer IDs and names
        customers.forEach(customer => {
            const option = document.createElement('option');
            option.value = customer.cusId; // Set the value to cusId
            option.text = `ID: ${customer.cusId} - Name: ${customer.cusName}`; // Display both cusId and cusName
            customerSelect.add(option);
        });
    } catch (error) {
        console.error('Error fetching customer data:', error);
    }
}

// Call loadCustomers when the page is loaded

async function loadItems() {
    try {
        // Fetch customer data from the Spring MVC endpoint
        const response = await fetch('http://localhost:8080/aad/api/v1/items');
        const items = await response.json();

        // Get the select element by its ID
        const customerSelectN = document.getElementById('itemCode');

        // Populate the select element with customer IDs and names
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.itemCode; // Set the value to cusId
            option.text = `CODE: ${item.itemCode} - Desc: ${item.itemDesc}`; // Display both cusId and cusName
            customerSelectN.add(option);
        });
    } catch (error) {
        console.error('Error fetching item data:', error);
    }
}

// Call loadCustomers when the page is loaded
window.onload = loadItems();
window.onload = loadCustomers;

$(document).ready(function () {

    $("#addToCartBtn").click(function () {
        event.preventDefault();

        let orderIdE = $("#oId").val();
        let cusIdE = $("#cusId").val();
        let cusNameE = $("#cusName").val();
        let itemCodeE = $("#itemCode").val();
        let itemDescE = $("#desc").val();
        let qtyE = $("#qty").val();
        let qtyOnHandE = $("#qtyOnHand").val();
        let priceE = $("#price").val();
        let totalE = $("#total").val();

        console.log(orderIdE);
        console.log(cusIdE);
        console.log(cusNameE);
        console.log(itemCodeE);
        console.log(itemDescE);
        console.log(qtyE);
        console.log(qtyOnHandE);
        console.log(priceE);
        console.log(totalE);

        const orderData = {
            orderId: orderIdE,
            cusId: cusIdE,
            cusName: cusNameE,
            itemCode: itemCodeE,
            itemDesc: itemDescE,
            qty: qtyE,
            qtyOnHand: qtyOnHandE,
            price: priceE,
            total: totalE
        };

        console.log(orderData)

        const orderJSON = JSON.stringify(orderData)
        console.log(orderJSON)

        $.ajax({
            url: "http://localhost:8080/aad/api/v1/orders",
            type: "POST",
            data: orderJSON,
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                console.log(JSON.stringify(res));
                successBanner.classList.remove('hidden');
                successBanner.style.display = 'block';
                setTimeout(function () {
                    successBanner.style.display = 'none';
                }, 3000);
            },
            error: (res) => {
                console.error(res);
                notSuccessBannerSave.classList.remove('hidden');
                notSuccessBannerSave.style.display = 'block';
                setTimeout(function () {
                    notSuccessBannerSave.style.display = 'none';
                }, 3000);
            }
        })
    })

    ///////////////////////////////////////Delete/////////////////////////////////////////////
    $("#deleteBtn").click(function(event) {
        event.preventDefault();

        let orderIdE = $("#oId").val();

        console.log(orderIdE);

        const orderData = {
            orderId: orderIdE,
        };

        console.log(orderIdE);

        const orderJSON = JSON.stringify(orderData);
        console.log(orderJSON);

        $.ajax({
            url: "http://localhost:8080/aad/api/v1/orders/" + orderIdE,
            type: "DELETE",
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                console.log(JSON.stringify(res));
                deleteBanner.classList.remove('hidden');
                deleteBanner.style.display = 'block';
                setTimeout(function() {
                    deleteBanner.style.display = 'none';
                }, 3000);
            },
            error: (res) => {
                console.error(res);
                notSuccessBanner.classList.remove('hidden');
                notSuccessBanner.style.display = 'block';
                setTimeout(function() {
                    notSuccessBanner.style.display = 'none';
                }, 3000);
            }
        });
    });
})