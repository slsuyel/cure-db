import { useParams } from 'react-router-dom';
import { useSinglePackageQuery } from '../../redux/api/packages/packageApi';
import { TPackage } from '../../types/type';
import {
  CheckmarkCircle03Icon,
  Alert01Icon,
  CancelCircleHalfDotIcon,
} from 'hugeicons-react'; // Import additional icons

const SinglePackage = () => {
  const { id } = useParams();
  const { data, isLoading } = useSinglePackageQuery(Number(id));

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
  const plan: TPackage = data;

  return (
    <>
      <div className="h-full w-2/5 ">
        <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
          <div className="mb-5">
            <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
              {plan.package_name}
            </div>
            <div className="inline-flex items-baseline mb-2">
              <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                $
              </span>
              <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                {plan.price}
              </span>
              <span className="text-slate-500 font-medium">/mo</span>
            </div>
          </div>
          <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
            Services:
          </div>
          <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
            {plan.allowed_services.map((s) => (
              <li className="flex  justify-between gap-3" key={s.name}>
                {s.status === 'active' ? (
                  <CheckmarkCircle03Icon size={20} className="text-green-500" />
                ) : s.status === 'deactive' ? (
                  <CancelCircleHalfDotIcon size={20} className="text-red-500" />
                ) : (
                  <Alert01Icon size={20} className="text-yellow-500" />
                )}
                <span className=" text-start">{s.name}</span>

                <button className="bg-green-300 rounded-sm px-3 py-2">
                  Change
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SinglePackage;
