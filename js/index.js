
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

function xepLaiMang(){
   

    numbers.sort();
    document.getElementById('txt__mangSauKhiXep').innerHTML = `mảng xếp theo giá trị tăng dần: ${numbers}`;
    
    
     
 }

 function doiViTri(){
    var viTri1 = document.getElementById("viTri1").value;
    var viTri2 = document.getElementById("viTri2").value;
    var tam = numbers[viTri1];
    numbers[viTri1] = numbers[viTri2];
    numbers[viTri2] = tam;

    document.getElementById('txt__mangSauKhiDoi').innerHTML = `mảng hiện tại: ${numbers}`;
    
    
     
 }
 
/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

function kiemTraSoNguyenToDauTien(){
    for (let i = numbers.length-1; i >=0; i --){
        if (isprime(numbers[i])==1){
            document.getElementById('txt__firstPrime').innerHTML = `số nguyên tố đầu tiên trong mảng: ${numbers[i]}`;
            return;
        }
    }

    document.getElementById('txt__firstPrime').innerHTML = `số nguyên tố đầu tiên trong mảng không có {-1}`;
}
function timSoNguyen(){
    let a = 0;
    for (let i = numbers.length-1; i >=0; i--){
        if (Number.isInteger(numbers[i]*1) === true ){
            a++;
        }
    }
    document.getElementById('txt__timSoNguyen').innerHTML = `số nguyên trong mảng: ${a}`;
}

function demSoAm(){
    let dem = 0;

    for (let i=0;i<numbers.length;i++)

    {

           if (numbers[i]<0)
           dem ++;
                  

    }
    return dem;
    
    
}
function demSoDuongSoSanh(){
    let dem = 0;

    for (let i=0;i<numbers.length;i++)

    {

           if (numbers[i]>0)
           dem ++;
                  

    }
    return dem;
    
    
}

function soSanh(){
    if(demSoAm() > demSoDuongSoSanh()){
        document.getElementById('txt__sosanh').innerHTML = `số âm nhiều hơn`;
    }else {
        document.getElementById('txt__sosanh').innerHTML = `số dương nhiều hơn`;
    }
}
