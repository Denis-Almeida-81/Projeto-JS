const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertCurrency() {

        const inputCurrency = document.querySelector(".input-currency").value

        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

        const currencyValueConverted = document.querySelector(".currency-value")

        console.log(currencySelect.value)

        const dolarDay = 5.40
        const euroDay = 6.20
        const libraDay = 7.20
        const bitcoinDay = 200000.00

        const convertedValue = inputCurrency / dolarDay

        if (currencySelect.value == "dolar") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                }).format(inputCurrency / dolarDay)
        }

        if (currencySelect.value == "euro") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                }).format(inputCurrency / euroDay)
        }
        if (currencySelect.value == "libra") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP"
                }).format(inputCurrency / libraDay)
        }
        if (currencySelect.value == "bitcoin") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "BTC"
                }).format(inputCurrency / bitcoinDay)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
        }).format(inputCurrency)
}

function changeCurrency() {

        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar") {
                currencyName.innerHTML = "Dólar americano"
                currencyImg.src = "./assepts/dólar.png"
        }
        if (currencySelect.value == "euro") {
                currencyName.innerHTML = "Euro"
                currencyImg.src = "./assepts/euro.png"
        }
        if (currencySelect.value == "libra") {
                currencyName.innerHTML = "Libra esterlina"
                currencyImg.src = "./assepts/libra.png"
        }
        if (currencySelect.value == "bitcoin") {
                currencyName.innerHTML = "Bitcoin"
                currencyImg.src = "./assepts/bitcoin.png"
        }

        convertCurrency()
}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertCurrency)
