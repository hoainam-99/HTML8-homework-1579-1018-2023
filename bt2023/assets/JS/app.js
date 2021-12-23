var productList = [{
    "product_value" : "0",
    "product_unitPrice" : 0
},{
    "product_value" : "650",
    "product_unitPrice" : 30
}, {
    "product_value" : "975",
    "product_unitPrice" : 35
},{
    "product_value" : "480",
    "product_unitPrice" : 45
}
]

const unitPrice = document.getElementById('unitPrice_id')
const quanity =  document.getElementById('quanity_id')
const totalPrice = document.getElementById('totalPrice_id')

function selectBox(obj){
    var value = obj.value;
    for (var i=0; i < productList.length; i++){
        if (value == productList[i].product_value){
            unitPrice.value = productList[i].product_unitPrice;
        }
        if(value != productList[0].product_value){
            quanity.disabled = false
        }else{
            quanity.value = 0
            quanity.disabled = true 
        }       
    }
}

function sum(){
    var x = quanity.value;
    var y = unitPrice.value;
    totalPrice.value = x * y;
}

