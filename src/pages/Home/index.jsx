import BarChart from './BarChart'
import './index.scss'
export default function Home() {
 

  return (
    <div className='home'>
     <BarChart title={'三大框架满意度'}/>
     <BarChart title={'三大框架使用度'}/>
    </div>
  );
}