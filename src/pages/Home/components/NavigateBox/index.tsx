/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button, Collapse, List, Popover, Tag } from 'antd';
import { navigateBoxData } from '../../../../mock/navigatebox';
import {
  BranchesOutlined,
  CheckCircleOutlined,
  ChromeOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { IconConfluence, IconEvolute, IconGitlab } from './icons';
import { useState } from 'react';

export const NavigateBox = () => {
  return (
    <div>
      {navigateBoxData.map((card, index) => {
        const icon = () => {
          if (card.path.includes('gitlab') || card.name.includes('gitlab')) {
            return (
              <span className="anticon">
                <IconGitlab size={16}></IconGitlab>
              </span>
            );
          } else if (
            card.path.includes('confluence') ||
            card.name.includes('confluence')
          ) {
            return (
              <span className="anticon">
                <IconConfluence size={16}></IconConfluence>
              </span>
            );
          } else if (
            card.path.includes('evolute') ||
            card.name.includes('evolute')
          ) {
            return (
              <span className="anticon">
                <IconEvolute></IconEvolute>
              </span>
            );
          } else if (card.path.includes('mp.weixin.qq.com')) {
            return (
              <span className="anticon">
                <img
                  src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/icon/login/mp_app698610.png"
                  alt=""
                  height={16}
                />
              </span>
            );
          } else if (card.path.includes('taro')) {
            return (
              <span className="anticon">
                <img
                  src="https://storage.360buyimg.com/pubfree-bucket/taro-docs/c07c6984de/img/logo-taro.png"
                  alt="Taro logo"
                  height={16}
                ></img>
              </span>
            );
          } else if (card.path.includes('umijs')) {
            return (
              <span className="anticon">
                <img
                  src="https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png"
                  alt="UmiJS"
                  height={16}
                ></img>
              </span>
            );
          } else if (card.path.includes('iconfont')) {
            return (
              <span className="anticon">
                <img
                  src="http://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg"
                  height={16}
                ></img>
              </span>
            );
          } else {
            return <ChromeOutlined />;
          }
        };
        const TagComponent = (
          <Tag
            className="mb-2 inline-flex items-center justify-center cursor-pointer"
            style={{
              height: 30,
              fontSize: 14,
            }}
            icon={icon()}
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
