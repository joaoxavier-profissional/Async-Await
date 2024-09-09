async function carregar(){
    try {
        const response = await fetch('products.json');

        if(!response.ok){
            throw new Error('Erro ao carregar JSON');
        }

        const data = await response.json();
        console.log(data);

        const roupasGrid = document.getElementById('roupas-grid');

        data.forEach(roupa => {
            console.log(roupa);
            const li = document.createElement('li');
            const card = document.createElement('div');
            card.classList.add('card-product');

            const img = document.createElement('img');
            img.src = roupa.images[0].url;
            img.alt = roupa.name;

            const titulo = document.createElement('h3');
            titulo.textContent = roupa.name;

            const preco = document.createElement('h4');
            preco.textContent = roupa.price;

            const botao = document.createElement('button');
            botao.textContent = 'Comprar';

            // Adiciona os elementos ao card
            card.appendChild(img);
            card.appendChild(titulo);
            card.appendChild(preco);
            card.appendChild(botao);

            // Adiciona o card dentro da <li>
            li.appendChild(card);

            // Adiciona a <li> ao grid
            roupasGrid.appendChild(li);
        });

    } catch (error) {
        console.error('Erro:', error);
    }


    /*fetch('products.json')
        .then(response => {
            return response.json();
        })    
        .then(data => {
            console.log(data);
        
            const roupasGrid = document.getElementById('roupas-grid');

            data.map(roupa => {
                console.log(roupa);
                const li = document.createElement('li');
                const card = document.createElement('div');
                card.classList.add('card-product');
                
                const img = document.createElement('img');
                img.src = roupa.images[0].url;
                img.alt = roupa.name;

                const titulo = document.createElement('h3');
                titulo.textContent = roupa.name;

                const preco = document.createElement('h4');
                preco.textContent = roupa.price;

                const botao = document.createElement('button');

                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(preco);
                card.appendChild(botao);

                li.appendChild(card);
            })
            console.log(roupasGrid);
        }
    );*/
}

carregar();