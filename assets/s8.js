// First and Basic codes

const laptops = [
    {
    model: "ASUS",
    price: 2500,
    memory: '256 GB',
    stockAvailibility: false
},

    {
    model: "HP",
    price: 2000,
    memory: '128 GB',
    stockAvailibility: true
    }
]


    const ModelTdTeqi = document.getElementById("model")
    const PriceTdTeqi = document.getElementById("price")
    const MemoryTdTeqi = document.getElementById("memory")
    const StockTdTeqi = document.getElementById("stock")

    
for(let i=0; i<laptops.length; i++){
    ModelTdTeqi.innerText = laptops[i].model
    PriceTdTeqi.innerText = laptops[i].price
    MemoryTdTeqi.innerText = laptops[i].memory


    if(laptops[i].stockAvailibility === true){
        StockTdTeqi.innerText = "Var"
    }
    else{
        StockTdTeqi.innerText = "Yoxdur"

    }

}



    ModelTdTeqi.innerText = laptops[0].model
    PriceTdTeqi.innerText = 2500
    MemoryTdTeqi.innerText = "256 GB"


    if(laptops.stockAvailibility === true){
        StockTdTeqi.innerText = "Var"
    }
    else{
        StockTdTeqi.innerText = "Yoxdur"

    }





    


