import { account, months } from './data.js'
function egzRender(selector, selector2, data, month) {
    const DOM = document.querySelector(selector);
    const DOM1 = document.querySelector(selector2);
    const kiek = data.length;
    let HTML = '';
    let iplaukos = 0; let islaidos = 0; let summa = 0;
    for (let i = 0; i < kiek; i++) {
        let oneMonth = data[i];
        let menuo = month[i];
        let expense = 0;
        let income = 0;
        if(oneMonth.hasOwnProperty('income')) {
            income = oneMonth.income;
        }
        if(oneMonth.hasOwnProperty('expense')) {
            expense = oneMonth.expense;
        }
                iplaukos += income;
                islaidos += expense;
        HTML += `
            <div class="table-row">
                        <div class="cell">${oneMonth.month}</div>
                        <div class="cell">${menuo.name}</div>
                        <div class="cell">${income}</div>
                        <div class="cell">${expense}</div>
                        <div class="cell"></div>
                    </div>`
    }
    summa = iplaukos - islaidos;
    let HTML1 = 
                    `<div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">${iplaukos} Eur</div>
                    <div class="cell">${islaidos} Eur</div>
                    <div class="cell">${summa} Eur</div>`;
    DOM1.innerHTML = HTML1;
    DOM.innerHTML = HTML;
}

egzRender('#generate', '.table-footer', account, months);
