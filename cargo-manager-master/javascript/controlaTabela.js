
      var $btnCad = document.getElementById('btnCad');

       $btnCad.addEventListener('click',addLinha);

    function formataData(data){
        var $data = data;
        var $dataFormatada = $data.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1');

         return $dataFormatada;
    }

    function compararData(data1,data2){
        var dt1 = data1;
        var dt2 = data2;

        if( new Date(dt1).getTime() < new Date(dt2).getTime() ){
            return true;
        }else{
            return false;
        }
    }



  function addLinha() {
       
        if(document.getElementById('dateIn').value && document.getElementById('dateOut').value){
            if(compararData(document.getElementById('dateIn').value, document.getElementById('dateOut').value )){

            var $motorista = document.getElementById('motorista').value;
            var $veiculo = document.getElementById('veiculo').value;
            var $dateIn = formataData(document.getElementById('dateIn').value);
           var $dateOut = formataData(document.getElementById('dateOut').value);

          var table = document.getElementById("tabela");
          var numOfRows = table.rows.length;
          var newRow = table.insertRow(numOfRows);
  
          newCell = newRow.insertCell(0);
          newCell.innerHTML = $motorista;
  
          newCell = newRow.insertCell(1);
          newCell.innerHTML = $veiculo;
  
          newCell = newRow.insertCell(2);
          newCell.innerHTML = $dateIn;
  
          newCell = newRow.insertCell(3);
          newCell.innerHTML = $dateOut;

    }else{
        alert("Data de saída deve ser maior que data de entrada.");
    }
   
  } else{alert("É necessário inserir data de entrada e saída.");;
}
  }

