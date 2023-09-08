/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button, Collapse, List, Popover, Tag } from 'antd';
import { navigateBoxData } from '../../../../mock/navigatebox';
import {
  BranchesOutlined,
  CheckCircleOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { IconConfluence, IconEvolute, IconGitlab } from './icons';
import { useState } from 'react';

export const NavigateBox = () => {
  return (
    <div>
      {navigateBoxData.map((card, index) => {
        const TagComponent = (
          <Tag
            className="mb-2 inline-flex items-center justify-center cursor-pointer"
            style={{
              height: 30,
              fontSize: 14,
            }}
            icon={
              <>
                {(card.path.includes('gitlab') ||
                  card.name.includes('gitlab')) && (
                  <IconGitlab size={16}></IconGitlab>
                )}
                {(card.path.includes('confluence') ||
                  card.name.includes('confluence')) && (
                  <IconConfluence size={16}></IconConfluence>
                )}
                {(card.path.includes('evolute') ||
                  card.name.includes('evolute')) && <IconEvolute></IconEvolute>}
              </>
            }
            color={colorList[index % colorList.length]}
            onClick={() => {
              window.open(card.path);
            }}
          >
            <span className="ml-2">{card.name}</span>
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
