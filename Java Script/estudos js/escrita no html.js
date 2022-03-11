for (i = 0; i <= 10; i++) {
    document.write(`<p>${i}</p>`);

    document.write(`<style>    
    p:nth-child(${i}){
        color:blue;
    }
    p{
        color:red;
    }
    </style>`);

}

