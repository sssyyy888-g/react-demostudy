import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

 const BarChart = ({title}) => {
 const chartRef = useRef(null); // 使用 ref 替代 getElementById

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);
    
    const option = {
        title:{
            text:title
        },
      xAxis: {
        type: 'category',
        data: ['vue','react','angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [10,40,70],
        type: 'bar'
      }]
    };

    myChart.setOption(option);

    // 响应式调整
    const resizeHandler = () => myChart.resize();
    window.addEventListener('resize', resizeHandler);

    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeHandler);
      myChart.dispose(); // 销毁实例
    };
  }, [title]);
  return (
     <div 
        ref={chartRef} 
        style={{ width: '500px', height: '400px' }}
      />
  )
}
export default BarChart;