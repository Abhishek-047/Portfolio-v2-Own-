// ============================================
//  Menu toggle
// ============================================
const menuItems = document.querySelectorAll(".nav .item");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(item => item.classList.remove("active"));
        item.classList.add("active");
    });
});


// ============================================
//               THEME TOGGLE
// ============================================
function theme() {
    const darkBtn = document.querySelector('#darkBtn');
    const lightBtn = document.querySelector('#lightBtn');

    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
    } else {
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';
    }

}


// ============================================
//                 Heatmap
// ============================================

let allDays = [];

customElements.whenDefined("activity-graph").then(() => {
    fetch("https://codeforces.com/api/user.status?handle=Abhishek047")
        .then(res => res.json())
        .then(data => {
            allDays = data.result
                .filter(s => s.verdict === "OK")
                .map(s => {
                    let d = new Date(s.creationTimeSeconds * 1000);
                    return d.toISOString().slice(0, 10);
                });

            const currentYear = new Date().getFullYear();
            applyYear(currentYear);
        });
});


function applyYear(year) {
    const graph = document.querySelector("activity-graph");

    const filteredDays = allDays.filter(d => d.startsWith(year));

    graph.setAttribute("range-start", `${year}-01-01`);
    graph.setAttribute("range-end", `${year}-12-31`);
    graph.setAttribute("activity-data", filteredDays.join(","));
}




// ============================================
const rightPanel = document.getElementById("rightPanel");
let originalContent = rightPanel.innerHTML;

document.addEventListener("click", (e) => {

    // More Skills click
    if (e.target.closest("#moreSkillsBtn")) {
        rightPanel.innerHTML = `
      <h2>More <span class="colored">Skills</span></h2>
      <div class="divider rtl"></div>
      <section class="more-skills">
                    <div><img src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML">
                        <p>HTML</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/349330/css3.svg" alt="CSS">
                        <p>CSS</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/452045/js.svg" alt="JavaScript">
                        <p>JavaScript</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/452091/python.svg" alt="Python">
                        <p>Python</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/452150/adobe-premiere.svg" alt="Premier Pro">
                        <p>Premier Pro</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/452141/adobe-after-effects.svg" alt="After Effects">
                        <p>After Effects</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/452145/adobe-lightroom.svg" alt="Lightroom">
                        <p>Lightroom</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/452149/adobe-photoshop.svg" alt="Photoshop">
                        <p>Photoshop</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/373528/cpp3.svg" alt="C++">
                        <p>C++</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="MySQL">
                        <p>MySQL</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/373482/c.svg" alt="C">
                        <p>C</p>
                    </div>
                    <div><img src="Images v2/icons8-davinci-resolve.svg" alt="Davinci Resolve">
                        <p>Davinci Resolve</p>
                    </div>
                    <div><img src="https://www.svgrepo.com/show/402866/video-camera.svg" alt="Photography">
                        <p>Photography</p>
                    </div>
      </section>

      <button id="backBtn" class="back-btn">Back</button>
    `;
    }

    // Back click
    if (e.target.closest("#backBtn")) {
        rightPanel.innerHTML = originalContent;
    }

});
