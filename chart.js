
const data = [
    { language: "Java", value: 5 },
    { language: "Python", value: 4 },
    { language: "C++", value: 3 },
    { language: "SQL", value: 4 },
    { language: "R", value: 2 }
];

const width = 550;
const height = 300;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const x = d3.scaleBand()
    .domain(data.map(d => d.language))
    .range([50, width - 20])
    .padding(0.2);

const y = d3.scaleLinear()
    .domain([0, 5])
    .range([height - 40, 20]);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.language))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - 40 - y(d.value))
    .attr("fill", "#6246a5");

svg.append("g")
    .attr("transform", `translate(0, ${height - 40})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("transform", "translate(50, 0)")
    .call(d3.axisLeft(y));
