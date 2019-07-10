const publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/1ZYMD-05RnCBb0zQRU1k0q2wqQik5Qltcs2VR87I-L8s/";

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true,
    debug: true,
    prettyColumnNames: true
  });
}

function hre_icon(text) {
  try {
    const book = "<span class='icon book'></span>";
    const coin = "<span class='icon coin'></span>";
    const shield = "<span class='icon shield'></span>";
    const t = text
      .replace(/📘/gi, book)
      .replace(/📀/gi, coin)
      .replace(/🛡/gi, shield);
    return t;
  } catch (e) {
    console.error(e);
    return text;
  }
}

function showInfo(data, tabletop) {
  console.log(data);

  data.map(row => {
    for (var p in row) {
      row[p] = row[p].trim();
    }
    console.log(row);

    const card = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 258 185.7" style="enable-background:new 0 0 258 185.7;" xml:space="preserve" class="card">

<g id="BG">
	<g id="Title_Backdrop">
		<rect width="258" height="185.7"/>
		<rect x="2.1" y="2.8" width="253.1" height="180"/>
	</g>
	<g id="Title_Backdrop_1_">
		
        <path class="st3" d="M4.9,44.9V12.8c0-3.9,3.2-7.1,7.1-7.1h233.3c3.9,0,7.1,3.2,7.1,7.1v32.1"/>
		
	</g>
	<g id="Mil_Background">
        <path class="st4" d="M245.3,134.6c3.9,0,7.1,3.2,7.1,7.1v31.3c0,3.9-3.2,7.1-7.1,7.1H12c-3.9,0-7.1-3.2-7.1-7.1v-31.3
				c0-3.9,3.2-7.1,7.1-7.1H245.3z"/>
	</g>
	<g id="Gold_Background">
		<rect x="4.9" y="89.7" class="st5" width="247.5" height="44.9"/>
	</g>
	<g id="Auth_Background">
		<rect x="4.9" y="44.9" class="st6" width="247.5" height="44.9"/>
	</g>
	<g id="Strokes">
		<line class="st7" x1="0" y1="44.9" x2="258" y2="44.9"/>
		<line class="st7" x1="258" y1="89.7" x2="0" y2="89.7"/>
		<line class="st7" x1="0" y1="134.6" x2="258" y2="134.6"/>
	</g>
</g>
<g id="Mil">
    <foreignObject x="0" y="134.6">
        <div xmlns="http://www.w3.org/1999/xhtml" class="st9 st10 instruction">

            <p class="a military-title">${row["Military Title"]}</p>
            <p class="a military-instructions">${hre_icon(
              row["Military Instructions🛡"]
            )}</p>
</div>
</foreignObject>
</g>
<g id="Gold">
    <foreignObject x="0" y="89.7">
        <div xmlns="http://www.w3.org/1999/xhtml" class="st9 st10 instruction">
        
            <p class="a commercial-instructions">${hre_icon(
              row["Commercial Instructions📀"]
            )}</p>
            <p class="a commercial-title">${row["Commercial Title"]}</p>
        
        </div>
    </foreignObject>
</g>
<g id="Auth">
	<foreignObject x="0" y="44.9">
        <div xmlns="http://www.w3.org/1999/xhtml" class="st9 st10 instruction">
    
        <p class="a diplomatic-title">${row["Diplomatic Title"]}</p>
        <p class="a diplomatic-instructions">${hre_icon(
          row["Diplomatic Instructions📘 "]
        )}</p>    
    
        </div>
    </foreignObject>
</g>
<g id="quote">
    <foreignObject x="0" y="26">
        <div xmlns="http://www.w3.org/1999/xhtml" class="st9 st10">
            <p class="quote">
                <span class="the-quote">“${row["Quote"]}”</span>
                ~
                <span class="attr">“${row["attr"]}”</span>
            </p>
        </div>
    </foreignObject>
</g>

<g id="Title_Text">
    <foreignObject x="0" y="5">
        <div xmlns="http://www.w3.org/1999/xhtml" class="title">
            <p>“${row["Event Title"]}”</p>
            <!--<p>${row["Event Description"]}</p> -->
        </div>
    </foreignObject>
</g>
<g id="Artwork_Assets">
	<rect x="10.8" y="7.8" class="st15" width="17.3" height="17.3"/>
	<rect x="228.5" y="7.8" class="st15" width="17.3" height="17.3"/>
	<text transform="matrix(1 0 0 1 17.75 16.375)" class="st9 st10">?</text>
	<text transform="matrix(1 0 0 1 236 17.5)" class="st9 st10">?</text>
</g>
</svg>
`;
    // console.log(card);
    document.getElementById("magical").insertAdjacentHTML("beforeend", card);
  });
}

window.addEventListener("DOMContentLoaded", init);
