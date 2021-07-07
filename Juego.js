class Juego {
    constructor(){
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.colorElegido = this.colorElegido.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 800)
    }

    inicializar(){
        btnEmpezar.classList.toggle('hide')
        this.nivel = 1
        this.dificultad = 1000
        this.nivelMaximo = 3
    }
    
    generarSecuencia(){
        this.secuencia = new Array(this.nivelMaximo).fill(0).map(x => Math.floor(Math.random() * 4))
        this.secuenciaDeColores = this.secuencia.map(x => this.numerosAColores(x))
    }

    numerosAColores(num){
        switch(num){
            case 0:
                return CELESTE
            case 1:
                return VIOLETA
            case 2:
                return NARANJA
            case 3:
                return VERDE
        }
    }
    
    siguienteNivel(){
            this.subnivel = 0
            this.iluminarSecuencia()
            this.agregarEventoClick()
    }
    
    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++){
            setTimeout(() => this.parpadearColor(this.secuenciaDeColores[i]),this.dificultad * i)
        }
    }

    parpadearColor(color){
        color.classList.add('light')
        setTimeout(() => color.classList.remove('light'), 350)
    }

    agregarEventoClick(){
        CELESTE.addEventListener('click', this.colorElegido);
        VIOLETA.addEventListener('click', this.colorElegido);
        NARANJA.addEventListener('click', this.colorElegido);
        VERDE.addEventListener('click', this.colorElegido);
    }
    eliminarEventoClick(){
        CELESTE.removeEventListener('click', this.colorElegido);
        VIOLETA.removeEventListener('click', this.colorElegido);
        NARANJA.removeEventListener('click', this.colorElegido);
        VERDE.removeEventListener('click', this.colorElegido);
    }

    colorElegido(ev){

        let colorElegido = ev.toElement;
        let colorCorrecto = this.secuenciaDeColores[this.subnivel];

        this.parpadearColor(colorElegido);

        if(colorElegido === colorCorrecto){
            this.subnivel++ ;
            console.log('correcto');
            if(this.subnivel === this.nivel){
                this.nivel++;
                if(this.nivel === this.nivelMaximo){
                    this.mensajeDeVictoria();
                    this.inicializar();
                }else{
                setTimeout(this.siguienteNivel, 1500)
                }
            }
        }else{
            this.mensajeDeError()
            this.inicializar();
        }
    }

    mensajeDeError(){
        swal('Oh no..! Te equivocaste.',' No te preocupes, puedes empezar denuevo','error' )
    }

    mensajeDeVictoria(){ 
        swal('Felicidades', 'Terminaste exitosamente todos lo niveles', 'success')
    }


}