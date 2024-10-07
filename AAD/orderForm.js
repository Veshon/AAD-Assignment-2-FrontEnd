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
                notSuccessBanner.classList.remove('hidden');
                notSuccessBannerSave.style.display = 'block';
                setTimeout(function () {
                    notSuccessBannerSave.style.display = 'none';
                }, 3000);
            }
        })
    })
})