import Chart from 'react-apexcharts'



function MyChart( ){

    return (
        <div className='App'>
            <Chart
                type='bar'
                width={450}
                height={150}
                
                series={[
                    {
                        name: 'Company1',
                        data:[100, 200, 232, 132, 422, 132]
                    }
                ]}
                options={{
                    theme: {
                        mode:  'dark'
                    },
                    chart: {
                        background: 'linear-gradient(60deg, #ffa726, #fb8c00)'
                    },
                    plotOptions: {
                    bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                    }
                },
                }}
            >

            </Chart>
        </div>
        )
}

export default MyChart;