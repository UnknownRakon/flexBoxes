var button = document.getElementById('change')

button.onclick = function(){
    console.log('yes')
    if (document.getElementById('wraper').style.flexDirection == 'row'){
        document.getElementById('wraper').style.flexDirection = 'column'
    }else{
        document.getElementById('wraper').style.flexDirection = 'row'   
    }
  }