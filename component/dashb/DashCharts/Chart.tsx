// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic'



function MyChart( ){
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

    return (
        <div className='App'>
            {
                (typeof window !== 'undefined') &&
            <Chart
                type='bar'
                width={400}
                height={150}
                
                series={[
                    {
                        name: 'Company1',
                        data:[100, 200, 232, 132, 422, 132,]
                    }
                ]}
                options={
                    {
                        theme: {
                            mode:  'dark'
                        },
                        chart: {
                            background: 'linear-gradient(60deg, #ffa726, #fb8c00)'
                        },
                        plotOptions: {
                        bar: {
                        borderRadius: 0,
                        columnWidth: '30%',
                        distributed: false,
                        rangeBarOverlap: true,
                        rangeBarGroupRows: true,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                        }
                        },
                     
                    }
            }
            
            />
        }
        </div>
        )
}

export default MyChart;