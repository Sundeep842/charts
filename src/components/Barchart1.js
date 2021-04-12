import React,{useEffect,useRef,useContext} from 'react'
import * as d3 from 'd3'
import "./Barchart.css"
import {VendorContext} from "../VendorContext"

function Barchart() {
    const {vendor,setVendor} =useContext(VendorContext)
    const svgRef = useRef()
    const DUMMY_DATA=[
        {id:1,invoices_number:13,vendor:"techm"},
        {id:2,invoices_number:13,vendor:"techm"},
        {id:3,invoices_number:34,vendor:"attra"}

    ]
    var vendor_data = DUMMY_DATA.filter(d=>(d.vendor==vendor))


    useEffect(() => {
        if(vendor_data!=[]){

        console.log(vendor_data)
        const xScale= d3.scaleBand()
        .domain(vendor_data.map(dataPoint=>{console.log(dataPoint.vendor); return dataPoint.vendor})).rangeRound([0,250]).padding(0.1);

        const  yScale=d3.scaleLinear().domain([0,150]).range([200,0])
        d3.select(svgRef.current).selectAll('.bar')
        .data(vendor_data)
        .join('rect')
        .enter()
        .append()
        .exit()
        .classed('bar',true)
         //Add listener for the mouseover event
         .on('mouseover',function(data){console.log(data)})
        .attr('width',xScale.bandwidth)
        .attr('height',data=>(250-yScale(data.invoices_number)))
        .attr('x',data=>xScale(data.vendor))
        .attr('y',data=>yScale(data.invoices_number))
        }
    }, [vendor])
    return (
        <div className="svg_container">
            {vendor}
        <svg ref={svgRef} className="container">
        
        </svg>
        </div>
    )
}

export default Barchart
