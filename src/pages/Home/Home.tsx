import {
  UserIcon,
  DollarCircleIcon,
  CheckmarkBadge03Icon,
} from 'hugeicons-react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mb-6">
        <CardDataStats title="Total user" total="200" rate="5.10%" levelUp>
          <UserIcon size={24} className="text-strokedark dark:text-stroke" />
        </CardDataStats>
        <CardDataStats
          title="New Registrations"
          total="200"
          rate="5.10%"
          levelUp
        >
          <UserIcon size={24} className="text-strokedark dark:text-stroke" />
        </CardDataStats>

        <CardDataStats
          title="Subscription Status"
          total="150"
          rate="2.75%"
          levelUp
        >
          <DollarCircleIcon
            size={24}
            className="text-strokedark dark:text-stroke"
          />{' '}
        </CardDataStats>

        <CardDataStats
          title="Pending Verifications"
          total="150"
          rate="1.85%"
          levelDown
        >
          <CheckmarkBadge03Icon
            size={24}
            className="text-strokedark dark:text-stroke"
          />{' '}
          {/* Example icon for verification */}
        </CardDataStats>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </div>
  );
};

export default Home;
