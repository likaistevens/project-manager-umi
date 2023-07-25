import { LinkItemType } from './type';
import { LinkItem } from './LinkItem';
import React, { useEffect, useState } from 'react';
import { includesByPinyin } from '@/utils';
// import {
//   createToolBoxItem,
//   deleteToolBoxItem,
//   listToolBoxItem,
//   updateToolBoxItem,
// } from '../../api/toolbox';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { debounce } from 'lodash';
import { Button, Form, Input, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  createToolBoxItem,
  deleteToolBoxItem,
  listToolBoxItem,
  updateToolBoxItem,
} from '@/api';

export const ToolBoxList = () => {
  const [toolBoxList, setToolBoxList] = useState<LinkItemType[]>([]);
  const [originList, setOriginList] = useState<LinkItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useLocalStorage<string>('tool_box_search');
  const [form] = Form.useForm();

  const onSearch = debounce((v: string, list?: LinkItemType[]) => {
    if (v) {
      const newList = (list || originList).filter((item) => {
        return includesByPinyin(v, {
          title: item.title,
          des: item.desc,
          url: item.url,
        });
      });
      setToolBoxList(newList);
    } else {
      setToolBoxList(list || originList);
    }
  }, 300);

  const getList = async (v?: string) => {
    const data = await listToolBoxItem(v);
    if (search) {
      onSearch(search, data);
    } else {
      setToolBoxList(data);
    }
    setOriginList(data);
  };

  const onSubmit = async () => {
    setOpen(false);
    const fields = form.getFieldsValue(true);
    console.log(fields);
    if (fields.id) {
      await updateToolBoxItem(fields);
    } else {
      await createToolBoxItem(fields);
    }
    getList();
    form.resetFields();
    message.success('操作成功');
  };

  const onDelete = async (item: LinkItemType) => {
    console.log('确认删除？');
    Modal.confirm({
      title: '确认删除？',
      content: `确认删除 ${item.title}？`,
      // okButtonProps: {
      //   status: 'danger',
      // },
      onOk: async () => {
        await deleteToolBoxItem({ id: item.id });
        getList();
      },
    });
  };

  const onEdit = (info: LinkItemType) => {
    form.setFieldsValue(info);
    setOpen(true);
  };

  const onCreate = () => {
    form.resetFields();
    setOpen(true);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div
      className="flex h-full"
      style={{
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', marginBottom: 20, height: 32 }}>
        <Input.Search
          allowClear
          placeholder=""
          onSearch={(v) => {
            onSearch(v);
          }}
          onChange={(e) => {
            onSearch(e.target.value);
            setSearch(e.target.value);
          }}
          value={search}
        />
        <Button
          type="primary"
          shape="round"
          style={{ width: 150, marginLeft: 20 }}
          onClick={onCreate}
        >
          <PlusOutlined />
        </Button>
      </div>
      <div
        className="overflow-auto"
        style={{
          marginRight: -20,
          paddingRight: 20,
        }}
      >
        {toolBoxList.map((item) => {
          return (
            <LinkItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </div>

      <Modal
        title="新建链接"
        open={open}
        onOk={onSubmit}
        onCancel={() => setOpen(false)}
        // autoFocus={false}
        // focusLock={true}
        maskClosable={false}
      >
        <Form form={form} labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
          <Form.Item name="title" label="标题" wrapperCol={{ span: 15 }}>
            <Input />
          </Form.Item>

          <Form.Item name="url" label="链接" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="desc" label="描述">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
