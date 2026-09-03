console.log("SCRIPT STARTED");
const reportButton = document.querySelector(".dashboard-button");

reportButton.addEventListener("click", function () {
    reportButton.textContent = "Report Opened ✓";

    setTimeout(function () {
        reportButton.textContent = "View Report";
    }, 1500);
});

const dashboardData = {
    "Last 7 days": {
        datasets: 24,
        records: 12450,
        insights: 86,
        graph: [40, 55, 48, 70, 62, 80, 75]
    },

    "Last 30 days": {
        datasets: 32,
        records: 16800,
        insights: 91,
        graph: [35, 50, 65, 55, 75, 82, 90]
    },

    "Last 3 months": {
        datasets: 47,
        records: 28400,
        insights: 94,
        graph: [30, 45, 55, 72, 68, 85, 95]
    }
};

const timeFilter = document.querySelector(".time-filter");

const datasetsNumber = document.querySelector(".datasets-number");
const recordsNumber = document.querySelector(".records-number");
const insightsNumber = document.querySelector(".insights-number");

const analyticsGraph = document.querySelector("#analyticsGraph");


function renderGraph(values) {

    analyticsGraph.innerHTML = "";

    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute("viewBox", "0 0 500 200");
    analyticsGraph.appendChild(svg);

    const yLabels = [100, 75, 50, 25, 0];

    yLabels.forEach(function (label) {

        const text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        const y = 200 - (label * 2);

        text.setAttribute("x", "5");
        text.setAttribute("y", y + 4);
        text.setAttribute("fill", "#64748B");
        text.setAttribute("font-size", "11");

        text.textContent = label;

        svg.appendChild(text);
    });

    [0, 25, 50, 75, 100].forEach(function (value) {

        const line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        const y = 200 - (value * 2);

        line.setAttribute("x1", "35");
        line.setAttribute("x2", "500");
        line.setAttribute("y1", y);
        line.setAttribute("y2", y);

        line.setAttribute("stroke", "#27324A");
        line.setAttribute("stroke-width", "1");

        svg.appendChild(line);
    });

    const xStep = 465 / (values.length - 1);

    const points = values.map(function (value, index) {

        const x = 35 + (index * xStep);
        const y = 200 - (value * 2);

        return `${x},${y}`;
    });

    const pointString = points.join(" ");

    const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polyline"
    );

    line.setAttribute("points", pointString);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", "#4F7CFF");
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("stroke-linejoin", "round");

    svg.appendChild(line);

    points.forEach(function (point) {

        const [x, y] = point.split(",");

        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "4");

        circle.setAttribute("fill", "#8B5CF6");
        circle.setAttribute("stroke", "#F8FAFC");
        circle.setAttribute("stroke-width", "1.5");

        svg.appendChild(circle);
    });

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    days.forEach(function (day, index) {

        const text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        const x = 35 + (index * xStep);

        text.setAttribute("x", x);
        text.setAttribute("y", "195");
        text.setAttribute("fill", "#64748B");
        text.setAttribute("font-size", "10");
        text.setAttribute("text-anchor", "middle");

        text.textContent = day;

        svg.appendChild(text);
    });
}

function updateDashboard(period) {

    const data = dashboardData[period];

    datasetsNumber.textContent = data.datasets;

    recordsNumber.textContent =
        data.records.toLocaleString();

    insightsNumber.textContent =
        data.insights + "%";

    renderGraph(data.graph);
}

timeFilter.addEventListener("change", function () {

    const selectedPeriod = timeFilter.value;

    updateDashboard(selectedPeriod);
});

updateDashboard("Last 7 days");

const emailInput = document.querySelector(".cta__input");
const ctaButton = document.querySelector(".cta__button");

ctaButton.addEventListener("click", function () {

    const email = emailInput.value.trim();

    if (email === "") {
        ctaButton.textContent = "Enter Email";
        return;
    }

    if (!email.includes("@")) {
        ctaButton.textContent = "Invalid Email";
        return;
    }

    ctaButton.textContent = "You're In ✔️";
    emailInput.value = "";
});

const featureButton = document.querySelector(".hero_button1");

featureButton.addEventListener("click", function () {

    document.querySelector(".features").scrollIntoView({
        behavior: "smooth"
    });
});

const heroButton = document.querySelector(".hero_button2");

heroButton.addEventListener("click", function () {

    document.querySelector(".CTA").scrollIntoView({
        behavior: "smooth"
    });
});

const navButton = document.querySelector(".nav_button");

navButton.addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});


const uploadStep = document.querySelector("#uploadStep");
const analyzeStep = document.querySelector("#analyzeStep");
const exploreStep = document.querySelector("#exploreStep");


const dataFile = document.querySelector("#dataFile");

console.log("Upload card:", uploadStep);
console.log("File input:", dataFile);

let uploadedFile = null;


let analysisData = null;

const workflow = document.createElement("div");

workflow.className = "workflow-panel";

workflow.innerHTML = `
    <div class="workflow-overlay"></div>

    <div class="workflow-modal">

        <button class="workflow-close">&times;</button>

        <div class="workflow-modal-content"></div>

    </div>
`;

document.body.appendChild(workflow);

const overlay = workflow.querySelector(".workflow-overlay");
const modal = workflow.querySelector(".workflow-modal");
const modalContent = workflow.querySelector(".workflow-modal-content");
const closeButton = workflow.querySelector(".workflow-close");

function openWorkflow() {
    workflow.classList.add("active");
}

function closeWorkflow() {
    workflow.classList.remove("active");
}

closeButton.addEventListener("click", closeWorkflow);

overlay.addEventListener("click", closeWorkflow);


uploadStep.addEventListener("click", function () {
         uploadStep.addEventListener("click", function () {
    console.log("UPLOAD CARD CLICKED");
});
    modalContent.innerHTML = `
        <div class="workflow-icon">↑</div>

        <h2>Upload Your Data</h2>

        <p>
            Choose a CSV file and DataLens will prepare it
            for analysis.
        </p>

        <div class="upload-area" id="uploadArea">

            <div class="upload-symbol">＋</div>

            <h3>Choose your CSV file</h3>

            <p>CSV files only</p>

            <button class="browse-button" id="browseButton">
                Browse File
            </button>

        </div>

        <div class="selected-file" id="selectedFile"></div>

        <button class="continue-button" id="continueButton" disabled>
            Continue →
        </button>
    `;

    openWorkflow();


    const browseButton = document.querySelector("#browseButton");
    const continueButton = document.querySelector("#continueButton");
    const uploadArea = document.querySelector("#uploadArea");
    const selectedFile = document.querySelector("#selectedFile");

    browseButton.addEventListener("click", function () {
        dataFile.click();
    });


    dataFile.onchange = function () {

        const file = dataFile.files[0];

        if (!file) {
            return;
        }

        if (!file.name.toLowerCase().endsWith(".csv")) {

            selectedFile.innerHTML = `
                <span class="error-message">
                    Please choose a CSV file.
                </span>
            `;

            continueButton.disabled = true;

            return;
        }

        uploadedFile = file;

        selectedFile.innerHTML = `
            <div class="file-success">
                 ${file.name}
            </div>
        `;

        continueButton.disabled = false;

        uploadArea.classList.add("has-file");
    };

    continueButton.addEventListener("click", function () {

        if (!uploadedFile) {
            return;
        }

        closeWorkflow();

        analyzeStep.classList.add("ready");

        analyzeStep.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

});

analyzeStep.addEventListener("click", function () {
    if (!uploadedFile) {

        showMessage(
            "Upload your CSV first.",
            "Please complete Step 1 before analyzing your data."
        );

        return;
    }

    modalContent.innerHTML = `
        <div class="workflow-icon">✦</div>

        <h2>Analyze Your Data</h2>

        <p>
            DataLens is checking your dataset and finding
            useful information.
        </p>

        <div class="analysis-progress">

            <div class="analysis-item">
                <span>✓</span>
                Reading CSV file
            </div>

            <div class="analysis-item">
                <span id="analysisCheck">○</span>
                Checking columns
            </div>

            <div class="analysis-item">
                <span id="analysisCheck2">○</span>
                Calculating statistics
            </div>

        </div>
    `;

    openWorkflow();


    setTimeout(function () {

        const reader = new FileReader();


        reader.onload = function (event) {

            const csvText = event.target.result;

            const rows = csvText
                .trim()
                .split(/\r?\n/);

            const data = rows.map(function (row) {

                return row.split(",").map(function (cell) {
                    return cell.trim();
                });

            });

            if (data.length === 0 || data[0].length === 0) {

                closeWorkflow();

                showMessage(
                    "Could not analyze file.",
                    "The CSV appears to be empty."
                );

                return;
            }

            const columnCount = data[0].length;

            const rowCount = Math.max(data.length - 1, 0);

            const numericColumns = [];


            for (let column = 0; column < columnCount; column++) {

                const values = data
                    .slice(1)
                    .map(function (row) {
                        return Number(row[column]);
                    })
                    .filter(function (value) {
                        return !Number.isNaN(value);
                    });
                if (
                    values.length > 0 &&
                    values.length >= rowCount * 0.6
                ) {

                    numericColumns.push({
                        name: data[0][column],
                        values: values
                    });

                }

            }
            const statistics = numericColumns.map(function (column) {

                const total = column.values.reduce(
                    function (sum, value) {
                        return sum + value;
                    },
                    0
                );


                const average =
                    total / column.values.length;


                const highest =
                    Math.max(...column.values);


                const lowest =
                    Math.min(...column.values);


                return {
                    name: column.name,
                    average: average,
                    highest: highest,
                    lowest: lowest
                };

            });

            analysisData = {
                fileName: uploadedFile.name,
                rows: rowCount,
                columns: columnCount,
                statistics: statistics
            };

            document.querySelector("#analysisCheck").textContent = "✓";
            document.querySelector("#analysisCheck2").textContent = "✓";


            setTimeout(function () {

                closeWorkflow();

                exploreStep.classList.add("ready");

                exploreStep.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


            }, 800);

        };

        reader.readAsText(uploadedFile);


    }, 600);

});

exploreStep.addEventListener("click", function () {
    if (!analysisData) {

        showMessage(
            "Analyze your data first.",
            "Complete Step 2 before exploring the results."
        );

        return;
    }

    let statisticsHTML = "";


    if (analysisData.statistics.length === 0) {

        statisticsHTML = `
            <div class="empty-statistics">
                No numeric columns were detected.
            </div>
        `;

    } else {

        analysisData.statistics.forEach(function (stat) {

            statisticsHTML += `
                <div class="result-stat">

                    <h3>${stat.name}</h3>

                    <div class="result-values">

                        <div>
                            <small>Average</small>
                            <strong>
                                ${stat.average.toFixed(2)}
                            </strong>
                        </div>

                        <div>
                            <small>Highest</small>
                            <strong>
                                ${stat.highest}
                            </strong>
                        </div>

                        <div>
                            <small>Lowest</small>
                            <strong>
                                ${stat.lowest}
                            </strong>
                        </div>

                    </div>

                </div>
            `;

        });

    }


    modalContent.innerHTML = `

        <div class="results-header">

            <div>

                <span class="results-label">
                    ANALYSIS RESULTS
                </span>

                <h2>${analysisData.fileName}</h2>

            </div>

        </div>


        <div class="summary-grid">

            <div class="summary-card">
                <small>Rows</small>
                <strong>${analysisData.rows}</strong>
            </div>

            <div class="summary-card">
                <small>Columns</small>
                <strong>${analysisData.columns}</strong>
            </div>

            <div class="summary-card">
                <small>Numeric columns</small>
                <strong>${analysisData.statistics.length}</strong>
            </div>

        </div>


        <h3 class="results-title">
            Key Statistics
        </h3>


        <div class="statistics-list">
            ${statisticsHTML}
        </div>


        <button class="close-results" id="closeResults">
            Done
        </button>
    `;


    openWorkflow();


    document.querySelector("#closeResults")
        .addEventListener("click", closeWorkflow);

});

function showMessage(title, message) {

    modalContent.innerHTML = `

        <div class="workflow-icon">!</div>

        <h2>${title}</h2>

        <p>${message}</p>

        <button class="continue-button" id="messageClose">
            Okay
        </button>
    `;


    openWorkflow();


    document.querySelector("#messageClose")
        .addEventListener("click", closeWorkflow);
}