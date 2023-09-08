import React from 'react';
import { LinkItemType } from './type';
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Popover } from 'antd';
import { Link } from '@umijs/max';

export const LinkItem: React.FC<{
  item?: LinkItemType;
  onDelete: (id: LinkItemType) => void;
  onEdit: (info: LinkItemType) => void;
}> = ({ item, onDelete, onEdit }) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <div className="flex justify-between">
        <div
          className="flex items-center"
          style={{ width: 'calc(100% - 36px)' }}
        >
          <Link
            to={item?.url || ''}
            target="_blank"
            style={{
              fontWeight: item?.title ? 700 : 400,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {item?.title || item?.url}
          </Link>
          {item?.desc && (
            <Popover title="" content={<span>{item?.desc}</span>}>
              <QuestionCircleOutlined className="icon-btn" />
            </Popover>
          )}
        </div>

        {/* <div style={{ width: 36, flexShrink: 0 }}>
          <EditOutlined
            style={{ marginRight: 8 }}
            className="icon-btn"
            onClick={() => {
              if (item) {
                onEdit(item);
              }
            }}
          />
          <DeleteOutlined
            className="icon-btn"
            onClick={() => {
              if (item) {
                onDelete(item);
              }
            }}
          />
        </div> */}
      </div>
    </div>
  );
};
