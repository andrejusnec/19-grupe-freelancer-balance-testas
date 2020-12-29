import { account, months } from './data.js'
function egzRender(selector, data, month) {
    const DOM = document.querySelector(selector);
    const kiek = data.length;
    let HTML = '';
    for (let i = 0; i < kiek; i++) {
        let oneMonth = data[i];
        let menuo = month[i];
        let expense = 0;
        let income = 0
        if(oneMonth.hasOwnProperty('income')) {
            income = oneMonth.income;
        }
        if(oneMonth.hasOwnProperty('expense')) {
            expense = oneMonth.expense;
        }
        HTML += `
            <div class="table-row">
                        <div class="cell">${oneMonth.month}</div>
                        <div class="cell">${menuo.name}</div>
                        <div class="cell">${income}</div>
                        <div class="cell">${expense}</div>
                        <div class="cell"></div>
                    </div>`
    }
    DOM.innerHTML = HTML;
}

egzRender('#generate', account, months);