var nuevo = "",
    ant = 0,
    op = "",
    res = 0,
    indicador = false,
    panel = document.getElementById("display"),
    teclas = document.getElementsByClassName("tecla"),
    calculadora = {
      init: function(){
        this.clear()
        this.mas()
        this.menos()
        this.por()
        this.dividido()
        this.sign()
        this.punto()
        this.pordefecto()
      },
      clear: function(){
        panel.innerHTML = 0
        ant = 0
        nuevo = ""
        indicador = false
      },
      mas: function(){
        if (res !== 0){
          ant = parseFloat(res)
        }
        else {
          ant = parseFloat(nuevo)
        }
        nuevo = ""
        panel.innerHTML = nuevo
        op = "mas"
      },
      menos: function(){
        if (res !== 0){
          ant = parseFloat(res)
        }
        else {
          ant = parseFloat(nuevo)
        }
        nuevo = ""
        panel.innerHTML = nuevo
        op = "menos"
      },
      por: function(){
        if (res !== 0){
          ant = parseFloat(res)
        }
        else {
          ant = parseFloat(nuevo)
        }
        nuevo = ""
        panel.innerHTML = nuevo
        op = "por"
      },
      dividido: function(){
        if (res !== 0){
          ant = parseFloat(res)
        }
        else {
          ant = parseFloat(nuevo)
        }
        nuevo = ""
        panel.innerHTML = nuevo
        op = "dividido"
      },
      igual: function(){
        if (indicador === true){
          if (op === "MAS"){
            res = parseFloat(nuevo) + parseFloat(ant)
          }
          if (op === "menos"){
            res = parseFloat(nuevo) - parseFloat(ant)
          }
          if (op === "por"){
            res = parseFloat(nuevo) * parseFloat(ant)
          }
          if (op === "dividido"){
            res = parseFloat(nuevo) / parseFloat(ant)
          }
          nuevo = res
        }
        else {
          ant = nuevo
          nuevo = res
          indicador = true
        }
        res = res.toString()
        if (res.length > 8){
          res = parseFloat(res)
          res = res.toExponential(2)
          panel.innerHTML = res
        }
        else{
          panel.innerHTML = res
        }
      },
      sign: function(){
        if(panel.innerHTML !== "0" || panel.innerHTML!==""){
          if(nuevo !== ""){
            nuevo = parseFloat(nuevo)
            nuevo = nuevo * -1
            panel.innerHTML = nuevo
          }
        }
      },
      punto: function(id){
        id = "."
        for (i = 0; i < nuevo.length; i++){
          if (nuevo[i] === "."){
            id = ""
          }
        }
        if (panel.innerHTML !== "0"){
          nuevo = nuevo + id
          panel.innerHTML = nuevo
        }
      },
      pordefecto: function(){
        indicador = false
        nuevo = nuevo.toString()
        if (nuevo.length <= 8){
          if (panel.innerHTML === "0" && id === "0"){}
          else{
            nuevo = nuevo + id
            panel.innerHTML = nuevo
          }
        }
        if(op === "mas"){
          res = ant + parseFloat(nuevo)
        }
        if (op === "menos"){
          if (nuevo >= "0") {res = ant - parseFloat(nuevo)}
          else{
            res = ant - parseFloat(nuevo)
          }
        }
        if (op === "por"){
          res = ant * parseFloat(nuevo)
        }
        if (op === "dividido"){
          res = ant / parseFloat(nuevo)
        }
      }
    }

for(i = 0; i < teclas.length; i++){
  teclas[i].addEventListener("click", function(event){

    id = event.target.getAttribute('id')
    ancho = event.target.style.width
    event.target.style.width = '1.5rem'

    function zoomtecla(){
      event.target.style.width = ancho
    }

    setTimeout(zoomtecla, 100)

    switch(id){
      case "on":
        calculadora.clear()
        break
      case "mas":
        calculadora.mas()
        break
      case "menos":
        calculadora.menos()
        break
      case "por":
        calculadora.por()
        break
      case "dividido":
        calculadora.dividido()
        break
      case "igual":
        calculadora.igual()
        break
      case "sign":
        calculadora.sign()
        break
      case "punto":
        calculadora.punto(id)
        break
      case "raiz":
        break
      default:
        calculadora.pordefecto()
        break
      }
  })
}
