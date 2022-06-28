
function hamchuyendoitiente(){
       let ketqua;
       let nhaptien= + document.getElementById('nhaptien').value;
       let nhap = document.getElementById('chuyendoi').value;
       console.log('chuyen',nhap);
       let xuat = document.getElementById('chuyendoi2').value;
       console.log('xuat',xuat);
       if (nhap===xuat){
              ketqua=nhaptien;
       }
       else {
              if (nhap === 'VND') {
                     ketqua = nhaptien / 23000;
              } else {
                     ketqua= nhaptien*23000;
              }
       }
     document.getElementById('ketqua').innerHTML=ketqua + ' ' + xuat;
}
