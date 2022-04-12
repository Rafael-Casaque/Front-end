document.querySelector("button").addEventListener("click",()=>{
    document.querySelector("#div5").scrollIntoView();
})

for(let i=0;i<5;i++){
    document.querySelectorAll("nav>button")[i].addEventListener("click",()=>{                
        document.querySelectorAll("div")[i].scrollIntoView({behavior: 'smooth' });        
    })
}

/*scrollIntoViewOptions Optional
A Boolean or an object with the following options:
{
  behavior: "auto"  | "instant" | "smooth",
  block:    "start" | "center" | "end" | "nearest",
  inline:    "start" | "center" | "end" | "nearest",
}*/

/* html base: 


body{
            text-align: center;
        }
        div {            
            height: 500px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;        
            margin-bottom: 15px;
        }

        div>p {
            text-align: center;
        }
        nav{
            width: 80%;
            margin-left: 10%;
            position:fixed;
            display: flex;
            align-items: center;
            justify-content: center;                    
            background-color: red;
            height: 50px;
        }
        nav>button{
            margin: 5px;
        }
        .cor1{
            background-color:green;
        }
        .cor2{
            background-color: blue;
        }
        .cor3{
            background-color: gray;
        }
        .cor4{
            background-color: yellow;
        }
        .cor5{
            background-color: white;
        }
    </style>
</head>

<body>
    <h1>Página com interação de scroll</h1>
    <hr>
    <nav>
        <button>Rolar p1</button>
        <button>Rolar p2</button>
        <button>Rolar p3</button>
        <button>Rolar p4</button>
        <button>Rolar p5</button>
    </nav>
    <div id="div1" class="cor1">
        <p>paragrafo1</p>
    </div>
    <div id="div2" class="cor2">
        <p>paragrafo2</p>
    </div>
    <div id="div3" class="cor3">
        <p>paragrafo3</p>
    </div>
    <div id="div4" class="cor4">
        <p>paragrafo4</p>
    </div>
    <div id="div5" class="cor5">
        <p>paragrafo5</p>
    </div>

    */