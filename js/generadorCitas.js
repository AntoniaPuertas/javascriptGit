        // Array de objetos con citas y sus autores
        const citas = [
            { 
                texto: "Sé el cambio que quieres ver en el mundo.", autor: "Mahatma Gandhi" 
            },
            { 
                texto: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", 
                autor: "John Lennon" 
            },
            { texto: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
            { texto: "La imaginación es más importante que el conocimiento.", autor: "Albert Einstein" },
            { texto: "La mejor manera de predecir el futuro es crearlo.", autor: "Peter Drucker" },
            { texto: "No cuentes los días, haz que los días cuenten.", autor: "Muhammad Ali" },
            { texto: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.", autor: "Nelson Mandela" },
            { texto: "La felicidad no es algo hecho. Viene de tus propias acciones.", autor: "Dalai Lama" },
            { texto: "El conocimiento es poder.", autor: "Francis Bacon" },
            { texto: "La verdad nunca daña una causa que es justa.", autor: "Mahatma Gandhi" }
        ];

function generarCita(){
    const aleatorio = Math.floor(Math.random() * citas.length);

    document.getElementById('frasetxt').innerHTML = citas[aleatorio].texto;
    document.getElementById('autortxt').innerHTML = citas[aleatorio].autor;

    document.querySelector('#frasetxt').textContent = "He seleccionado con el query selector";

}