const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ZYMD-05RnCBb0zQRU1k0q2wqQik5Qltcs2VR87I-L8s/';

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                    callback: showInfo,
                    simpleSheet: true, 
                    debug: true,
                    prettyColumnNames:true } )
}

function hre_icon(text){
    const book = "<span class='icon book'></span>";
    const coin = "<span class='icon coin'></span>";
    const shield = "<span class='icon shield'></span>";
    return text
            .replace(/📘/gi, book)
            .replace(/📀/gi, coin)
            .replace(/🛡/gi, shield);
}

function showInfo(data, tabletop) {
    console.log(data);
    
    data.map(row=>{
        const card = `
        <div class="card">
            <div class="event">
                <h1 class="c event-title">${row["Event Title"]}</h1>
                <p class="a event-description">${row["Event Description"]}</p>
                <p class="a quote"><q>${row["Quote"]}</q>-<span class="attr">${row["attr"]}</span></p>
            </div><div class="diplomatic">
                <p class="a diplomatic-title">${row["Diplomatic Title"]}</p>
                <p class="a diplomatic-instructions">${hre_icon(row["Diplomatic Instructions📘 "])}</p>
            </div><div class="commercial">
                <p class="a commercial-instructions">${hre_icon(row["Commercial Instructions📀"])}</p>
                <p class="a commercial-title">${row["Commercial Title"]}</p>
            </div>
            <div class="military">
                <p class="a military-title">${row["Military Title"]}</p>
                <p class="a military-instructions">${hre_icon(row["Military Instructions🛡"])}</p>
            </div>

            <!--
            <p class="a complete">${row["Complete"]}</p>
            <p class="a date">${row["Date"]}</p>
            <p class="a full-list-of-potential-card-results">${row["Full list of potential card results"]}</p>
            <p class="a meta-analysis-opt-1">${row["Meta analysis - Opt 1"]}</p>
            <p class="a meta-analysis-opt-2">${row["Meta analysis - Opt 2"]}</p>
            <p class="a meta-analysis-opt-3">${row["Meta analysis - Opt 3"]}</p>
            <p class="a rng">${row["RNG"]}</p> 
            -->
        </div>`
        // console.log(card);
        document.getElementById("magical").insertAdjacentHTML('beforeend', card);
    });
}

window.addEventListener('DOMContentLoaded', init)