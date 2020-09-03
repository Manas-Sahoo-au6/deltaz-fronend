import React from "react";
import ReactApexChart from "react-apexcharts";
import Axios from 'axios'
let Api = `https://deltaz-backend.herokuapp.com/post/chart`
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: "High - 2013",
          data: [12,15,12,15,12,15,12],
        },
        {
          name: "Low - 2013",
          data: [12,15,12,15,12,15,12],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Power Cost",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["00.00","01.00","02.00","03.00","04.00","05.00","06.00"],
          title: {
            text: "Time",
          },
        },
        yaxis: {
          title: {
            text: "Price",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }
 async componentDidMount() {
    console.log('Component DID MOUNT!')
    try{
      let data = await Axios({
        url:`${Api}`,
        method:"get"
      })
      if(data){
        // console.log(data.data.data[0])
        // this.setState({data:data.data.data})
       let  series= [
          {
            name: "High - 2013",
            data: data.data.data[0].High,
          },
          {
            name: "Low - 2013",
            data: data.data.data[0].Low,
          },
        ]
        this.setState({series:series})
        setTimeout(()=>{
       console.log(this.state.series)
        },3000)
      
        
      }
     
     }
    catch(err){
      console.log(err)
    }

 }

  render() {
    
    return (
      <div id="chart" className="col-10">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
