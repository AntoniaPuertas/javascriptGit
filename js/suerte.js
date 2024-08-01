// Array de frases con consejos y predicciones
const predicciones = [
    "Hoy es tu día de suerte. ¡Aprovecha cada oportunidad!",
    "Un viaje inesperado te traerá grandes alegrías.",
    "La paciencia es una virtud. Espera un poco más y verás resultados.",
    "Una persona cercana necesita tu ayuda. Estar atento a las señales.",
    "Tu creatividad está en su punto máximo. Es un buen momento para iniciar un nuevo proyecto.",
    "Un antiguo amigo regresará a tu vida con noticias emocionantes.",
    "La solución a tu problema está más cerca de lo que crees. Mira a tu alrededor.",
    "Tu esfuerzo será recompensado pronto. Sigue adelante.",
    "Una decisión importante se acerca. Confía en tu intuición.",
    "Hoy es un buen día para aprender algo nuevo. Mantén tu mente abierta."
];

function probarSuerte(){
   // let aleatorio = Math.random() * predicciones.length;
   // aleatorio = Math.floor(aleatorio);

    const aleatorio = Math.floor(Math.random() * predicciones.length);
    const prediccion = predicciones[aleatorio];
    document.getElementById('resultado').textContent = prediccion;
}