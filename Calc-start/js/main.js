//Площадь
const squareInput = document.getElementById('square-input'); 
const squareRange = document.getElementById('square-range');

squareRange.addEventListener("input", function(){
    squareInput.value = squareRange.value;
});
squareInput.addEventListener("input", function(){
    squareRange.value = squareInput.value;
});

//Тип ремонта
const typeReconstructionElements = document.querySelectorAll('input[name ="type"]');

//Здание
const typeBuildingElements = document.querySelectorAll('input[name ="building"]');


//Кол-во комнат
const roomsElements = document.querySelectorAll('input[name ="rooms"]');

//Доп. опции
const ceilings = document.querySelector('input[name ="ceiling"]');
const walls = document.querySelector('input[name ="walls"]');
const floor = document.querySelector('input[name ="floor"]');

//Базовая цена и элемент для вывода стоимости
const basePricePerimetr = 6000;
const totalPriceElement = document.getElementById('total-price');

//Расчёт
const inputs = document.querySelectorAll('input');

inputs.forEach(function(item){
    item.addEventListener("input", calculate);   
});

calculate()

function calculate(){
    let square = +squareInput.value;

    let typeReconstructionCost;
    typeReconstructionElements.forEach(function(x){
        if(x.checked){
            typeReconstructionCost = +x.value;
        }
    })

    let typeBuildingCost;
    typeBuildingElements.forEach(function(x){
        if(x.checked){
            typeBuildingCost = +x.value;
        } 
    })

    let roomsElementsCost;
    roomsElements.forEach(function(x){
        if(x.checked){
            roomsElementsCost = +x.value;
        }
    })
    
    let ceilingCost = ceilings.checked ? +ceilings.value : 1;
    let wallCost = walls.checked ? +walls.value : 1;
    let floorCost = floor.checked ? +floor.value : 1;
    
    const totalPrice = basePricePerimetr * square * typeReconstructionCost * 
    typeBuildingCost * roomsElementsCost * ceilingCost * wallCost * floorCost;

    //Вывод стоимости
    const formatter = new Intl.NumberFormat("ru");
    totalPriceElement.innerText = formatter.format(parseInt(totalPrice));    
};



