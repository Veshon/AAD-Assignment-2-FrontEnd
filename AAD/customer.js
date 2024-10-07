$(document).ready(function () {
    $("#save").click(function() {
        event.preventDefault();

        let idE = $("#cusId").val();
        let nameE = $("#cusName").val();
        let addressE = $("#cusAddress").val();
        let mobileE = $("#cusTeleNo").val();

        console.log(idE);
        console.log(nameE);
        console.log(addressE);
        console.log(mobileE);

        const customerData = {
            cusId:idE,
            cusName:nameE,
            cusAddress:addressE,
            cusTeleNo:mobileE
        };

        console.log(customerData)

        const customerJSON = JSON.stringify(customerData)
        console.log(customerJSON)

        $.ajax({
            url: "http://localhost:8080/aad/api/v1/customers",
            type: "POST",
            data: customerJSON,
            headers: { "Content-Type": "application/json" },
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
                notSuccessBannerSave.style.display = 'block';
                setTimeout(function() {
                    notSuccessBannerSave.style.display = 'none';
                }, 3000);
            }
        })
    })

    ///////////////////////////////////////Delete/////////////////////////////////////////////
    $("#delete").click(function(event) {
        event.preventDefault();

        let idE = $("#cusId").val();

        console.log(idE);

        const customerData = {
            cusId: idE,
        };

        console.log(customerData);

        const customerJSON = JSON.stringify(customerData);
        console.log(customerJSON);

        $.ajax({
            url: "http://localhost:8080/aad/api/v1/customers/" + idE,
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

        let idE = $("#cusId").val();
        let nameE = $("#cusName").val();
        let addressE = $("#cusAddress").val();
        let mobileE = $("#cusTeleNo").val();

        console.log(idE);
        console.log(nameE);
        console.log(addressE);
        console.log(mobileE);

        const customerData = {
            cusId:idE,
            cusName:nameE,
            cusAddress:addressE,
            cusTeleNo:mobileE
        };

        console.log(customerData)

        const customerJSON = JSON.stringify(customerData)
        console.log(customerJSON)

        $.ajax({
            url: "http://localhost:8080/aad/api/v1/customers/"+idE,
            type: "PUT",
            data: customerJSON,
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
})

function clearFields() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('mobile').value = '';
}

