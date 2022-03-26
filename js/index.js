
const numbers = [];
function addToArray() {
    var newValue = document.getElementById("newValue").value;
console.log(newValue);
    numbers.push(newValue);
    console.log(numbers);
    document.getElementById('mang').innerHTML = `mảng hiện tại: ${numbers}`;
    document.getElementById('newValue').value = "";
}

function demSoDuong(){
    let dem = 0;

    for (let i=0;i<numbers.length;i++)

    {

           if (numbers[i]>0)
           dem ++;
                  

    }
    document.getElementById('txt__demSoDuong').innerHTML = `tổng dương trong mảng: ${dem}`;
    
}

function tongSoDuong(){
    let tong = 0;

    for (let i=0;i<numbers.length;i++)

    {

           if (numbers[i]>0)
           tong=tong +numbers[i]*1;
                  

    }
    document.getElementById('txt__tongSoDUong').innerHTML = `số dương trong mảng: ${tong}`;
    
}

function timSoBeNhat(){
   

    let max_val = numbers.reduce(function(accumulator, element){
        return (accumulator < element) ? accumulator : element
      });


    document.getElementById('txt__soBeNhat').innerHTML = `số bé nhất: ${max_val}`;
    
}
function timSoDuongBeNhat(){
   

    let max_val = numbers.reduce(function(accumulator, element){
        return (accumulator < element && accumulator >0) ? accumulator : element
      });


    document.getElementById('txt__soDuongBeNhat').innerHTML = `số dương bé nhất: ${max_val}`;
    
}


/*Tạo hàm kiểm tra số chẵn lẻ*/
function check_odd_even(n){
    //flag = 1 => số lẻ 
    //flag = 0 => số chẵn

    let flag = 1;
    if( n % 2 == 0 ) flag= 0;
    return flag;  
}


/*Tạo hàm tìm số chẵn cuối cùng trong mảng JavaScript*/
function find_last_odd(array){
    for (let i = array.length-1; i >=0; i --){
        if (check_odd_even(array[i])==0) return array[i];
    }
    return -1;
}

function timSoDuongCuoi(){
   

   let lastOdd = find_last_odd(numbers);


    document.getElementById('txt__timSoDuongCuoi').innerHTML = `số dương cuôi: ${lastOdd}`;
    
}


