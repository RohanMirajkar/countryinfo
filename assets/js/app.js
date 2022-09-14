let result = '';
const infodiv = document.getElementById('info');
countries.forEach(country => {
    result += `
    <div class="col">
    <div class="card">
        <div class="imgContainer">
            <img src="${country.flag}" alt="">
        </div>
        <div class="countryName">
            <h3>${country.name}</h3>
        </div>
        <div class="countryinfo">
            <p><strong>Capital</strong> : ${country.capital}</p>
            <p><strong>lang</strong> : ${country.languages}</p>
            <p><strong>population</strong> : ${country.population}</p>
        </div>
    </div>
</div>  
    `
});
infodiv.innerHTML = result;
