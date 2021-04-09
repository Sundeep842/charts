import React,{useEffect,useRef} from 'react'
import * as d3 from 'd3'
import "./Barchart.css"

function Barchart() {
    const svgRef = useRef()
    const DUMMY_DATA=[
        {id:1,invoices_number:13,vendor:"techm"},
        {id:2,invoices_number:13,vendor:"capgemini"},
        {id:3,invoices_number:34,vendor:"attra"}

    ]

    useEffect(() => {
        const xScale= d3.scaleBand()
        .domain(DUMMY_DATA.map(dataPoint=>dataPoint.vendor)).rangeRound([0,250]).padding(0.1);

        const  yScale=d3.scaleLinear().domain([0,150]).range([200,0])
        d3.select(svgRef.current).selectAll('.bar')
        .data(DUMMY_DATA)
        .enter()
        .append('rect')
        .classed('bar',true)
         //Add listener for the mouseover event
        .attr('width',xScale.bandwidth)
        .attr('height',data=>250-yScale(data.invoices_number))
        .attr('x',data=>xScale(data.vendor))
        .attr('y',data=>yScale(data.invoices_number))
        
    }, [])
    return (
        <div className="svg_container">
        <svg ref={svgRef} className="container">
        
        </svg>
        </div>
    )
}

export default Barchart
