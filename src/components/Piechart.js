import React,{useEffect,useRef} from 'react'
import Barchart from './Barchart'

import * as d3 from 'd3'
import "./Piechart.css"

function Piechart() {
    const svgRef = useRef()
    const DUMMY_DATA=[
        {id:1,invoices_number:13,vendor:"techm"},
        {id:2,invoices_number:13,vendor:"capgemini"},
        {id:3,invoices_number:34,vendor:"attra"}

    ]
    var data1 = [2, 4, 8, 10];
    const data = [{
        vendor: 'techm',
        invoices_number: 10
    }, {
        vendor: 'capgemini',
        invoices_number: 20
    }, {
        vendor: 'attra',
        invoices_number: 30
    }, {
        vendor: 'ge',
        invoices_number: 40
    }];
      
useEffect(() => {

    const svg = d3.select('svg'),
    width = svg.attr('width'),
    height = svg.attr('height');
const radius = 200;
const g = svg.append('g').attr('transform', `translate(200,200)`);

const color = d3.scaleOrdinal(['#F4F1F0', '#FFEBE5', '#FFDF9E', '#F8D98C']);

const pie = d3.pie().sort(null).value(d => d.invoices_number);

const path = d3.arc().outerRadius(radius).innerRadius(0);

const label = d3.arc().outerRadius(radius).innerRadius(radius - 90);

const pies = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc')
            .on("mouseenter",function(){
                d3.select(this)    
                .style("stroke", "black")
                .style("fill", "blue");

                console.log(d3.select(this))
            })
            .on("mouseout", function(){
                d3.select(this)
                .style("stroke", "blue")

            });

pies.append('path').attr('d', path).attr('fill', d => color(d.data.invoices_number))



pies.append('text')
  .attr('transform', function(d) {
    return `translate(${label.centroid(d)})`;})
  .text(d => d.data.vendor)
    },[])

    return (
        <div>
            <svg id ={"#piechart_svg"} style={{height:'400px',width:'400px'}}>

            </svg>  
        </div>
    )
    }

export default Piechart
