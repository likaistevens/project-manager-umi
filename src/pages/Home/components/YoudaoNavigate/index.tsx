import { youdaoNavigateData } from '@/mock/youdaonavigate';
import { NavigateProjectCard } from './NavigateProjectCard';

export const YoudaoNavigate = () => {
  return (
    <div
      style={{
        height: 'calc(100vh - 140px)',
        overflow: 'auto',
      }}
    >
      {youdaoNavigateData.map((item) => {
        return (
          <div key={item.projectName} className="mb-2">
            <NavigateProjectCard
              key={item.projectName}
              item={item}
            ></NavigateProjectCard>
          </div>
        );
      })}
    </div>
  );
};
