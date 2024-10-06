$(document).ready(function () {
    $("#save").click(function () {
        event.preventDefault();

        let codeE = $("#code").val();
        let descE = $("#desc").val();
        let qtyE = $("#qty").val();
        let priceE = $("#price").val();

        console.log(codeE);
        console.log(descE);
        console.log(qtyE);
        console.log(priceE);

        const itemData = {
            code: codeE,
            description: descE,
            qty: qtyE,
            price: priceE
        };

        console.log(itemData)

        const itemJSON = JSON.stringify(itemData)
        console.log(itemJSON)

        $.ajax({
            url: "http://localhost:8080/item",
            type: "POST",
            data: itemJSON,
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                console.log(JSON.stringify(res));
                successBanner.classList.remove('hidden');
                successBanner.style.display = 'block';
                setTimeout(function() {
                    successBanner.style.display = 'none';
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
        })
    })

    ///////////////////////////////////////Delete/////////////////////////////////////////////
    $("#delete").click(function(event) {
        event.preventDefault();

        let codeE = $("#code").val();

        console.log(codeE);

        const itemData = {
            code: codeE,
        };

        console.log(itemData);

        const itemJSON = JSON.stringify(itemData);
        console.log(itemJSON);

        $.ajax({
            url: "http://localhost:8080/item?code=" + codeE,
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

    /////////////////////////////////////Update///////////////////////////////////////////
    $("#update").click(function() {
        event.preventDefault();

        let codeE = $("#code").val();
        let descE = $("#desc").val();
        let qtyE = $("#qty").val();
        let priceE = $("#price").val();

        console.log(codeE);
        console.log(descE);
        console.log(qtyE);
        console.log(priceE);

        const itemData = {
            code: codeE,
            description: descE,
            qty: qtyE,
            price: priceE
        };

        console.log(itemData)

        const itemJSON = JSON.stringify(itemData)
        console.log(itemJSON)

        $.ajax({
            url: "http://localhost:8080/item?code="+codeE,
            type: "PUT",
            data: itemJSON,
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                console.log(JSON.stringify(res));
                successBannerUpdate.classList.remove('hidden');
                successBannerUpdate.style.display = 'block';
                setTimeout(function() {
                    successBannerUpdate.style.display = 'none';
                }, 3000);
            },
            error: (res) => {
                console.error(res);
                notSuccessBannerUpdate.classList.remove('hidden');
                notSuccessBannerUpdate.style.display = 'block';
                setTimeout(function() {
                    notSuccessBannerUpdate.style.display = 'none';
                }, 3000);
            }
        })
    })

    //////////////////////////////////Clear/////////////////////////////////////////
    $("#clear").click(function() {
        clearFields()
    })

    function clearFields() {
        document.getElementById('code').value = '';
        document.getElementById('desc').value = '';
        document.getElementById('qty').value = '';
        document.getElementById('price').value = '';
    }
})