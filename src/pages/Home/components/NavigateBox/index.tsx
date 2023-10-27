/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button, List, Popover, Tag } from 'antd';
import { navigateBoxData } from '../../../../mock/navigatebox';
import {
  BranchesOutlined,
  ChromeOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { IconMap } from './icons';

export const NavigateBox = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {navigateBoxData.map((data) => {
        return <NavigateBoxModule key={data[0].path} data={data} />;
      })}
    </div>
  );
};

const NavigateBoxModule = ({
  data,
}: {
  data: {
    name: string;
    path: string;
    color?: string | undefined;
    pathList?:
      | {
          name: string;
          path: string;
        }[]
      | undefined;
  }[];
}) => {
  return (
    <div>
      {data.map((card, index) => {
        const icon = (
          <span className="anticon">
            {Object.entries(IconMap).find(
              ([key]) => card.path.includes(key) || card.name.includes(key),
            )?.[1] || <ChromeOutlined />}
          </span>
        );
        const TagComponent = (
          <Tag
            className="mb-2 inline-flex items-center justify-center cursor-pointer"
            style={{
              height: 30,
              fontSize: 14,
            }}
            icon={icon}
            color={card.color || colorList[index % colorList.length]}
            onClick={() => {
              window.open(card.path);
            }}
          >
            <span>{card.name}</span>
          </Tag>
        );
        return card.pathList?.length ? (
          <Popover
            key={card.name}
            content={
              <List
                size="small"
                bordered
                dataSource={card.pathList}
                renderItem={(item) => (
                  <List.Item
                    style={{ width: 300 }}
                    className="cursor-pointer"
                    onClick={(e) => {
                      window.open(`${item.path}`);
                    }}
                  >
                    <div>{item.name}</div>
                    {(card.path.includes('gitlab') ||
                      card.name.includes('gitlab')) && (
                      <div className="flex">
                        <Button
                          type="default"
                          shape="circle"
                          size="small"
                          className="mr-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`${item.path}/-/pipelines`);
                          }}
                        >
                          <RocketOutlined className="cursor-pointer" />
                        </Button>
                        <Button
                          type="default"
                          shape="circle"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`${item.path}/-/merge_requests`);
                          }}
                        >
                          <BranchesOutlined className="cursor-pointer" />
                        </Button>
                      </div>
                    )}
                  </List.Item>
                )}
              />
            }
          >
            {TagComponent}
          </Popover>
        ) : (
          TagComponent
        );
      })}
    </div>
  );
};

const colorList = [
  '#9FDB1D',
  '#F7BA1E',
  '#F53F3F',
  '#F77234',
  '#3491FA',
  '#722ED1',
  '#F5319D',
];
