const curencyOne = document.querySelector('#curency-one');
const curencyTwo = document.querySelector('#curency-two');
const amountOne = document.querySelector('.amount-one');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');


const calculate = () => {
	fetch(`https://api.exchangerate.host/latest?base=${curencyOne.value}&symbols=${curencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const curency1 = curencyOne.value
        const curency2 = curencyTwo.value
        const rate = data.rates[curency2]
        rateInfo.textContent = `1 ${curency1} = ${rate.toFixed(4)} ${curency2}`
        amountTwo.value = (amountOne.value * rate).toFixed(2)
    })
};

const swap = () => {
    const oldValue = curencyOne.value
    curencyOne.value = curencyTwo.value
    curencyTwo.value = oldValue
    calculate()
}

curencyOne.addEventListener('change', calculate)
curencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)

calculate()


