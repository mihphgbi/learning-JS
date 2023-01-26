const arrObj = [{
        key: 1,
        value: "a"
    },
    {
        key: 2,
        value: "b"
    },
    {
        key: 3,
        value: "c"
    },
    {
        key: 4,
        value: "d"
    },
    {
        key: 5,
        value: "e"
    },
    {
        key: 6,
        value: "a"
    },
    {
        key: 7,
        value: "b"
    },
    {
        key: 8,
        value: "c"
    },
    {
        key: 9,
        value: "d"
    },
    {
        key: 10,
        value: "e"
    },
    {
        key: 11,
        value: "f"
    },
    {
        key: 12,
        value: "f"
    },
];

function shuffle(arr) {
    let currentIndex = arr.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex) || 0;
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}

function createGame(arr) {
    const main = document.getElementById('list-card');
    if (main) {
        var valueArr = [];

        arr.map((element) => {
            const card = document.createElement('div');
            card.classList.add('card');
            main.appendChild(card);
            
            card.onclick = () => {
                card.classList.add('show-value');
                var showValue = document.querySelectorAll('.show-value');
                if (showValue.length <= 2 && !card.firstChild) {
                    //add value in arr
                    valueArr.push(element);
                    // show value of card
                    const result = document.createElement('div');
                    result.classList.add('value');
                    result.innerHTML = `${element.value}`; 
                    card.appendChild(result);
                }
                if (showValue.length == 2) {
                    if(valueArr.length != 0 && valueArr[0].value === valueArr[1].value) {
                        setTimeout(() => {
                            resetArray(valueArr);
                            showValue.forEach (s => s.remove());
                        },1000); 
                    } else {
                        setTimeout(() => {
                            resetArray(valueArr);
                            closeCard(showValue);
                        },1000); 
                    }
                }
            };
        });
    }
}

function closeCard (card) {
//remove all child in element 
    card.forEach (s => {
        while (s.firstChild) {
            s.removeChild(s.lastChild);
        }
        s.classList.remove('show-value');
    });
}
function resetArray (arr) {
    while (arr.length > 0) {
        arr.pop();
    }
}
const arr = shuffle(arrObj);
createGame(arr);

