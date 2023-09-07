import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import { o2s } from './utils';
import cssToJS from 'transform-css-to-js';

export const JsxStyleToCss = () => {
  const [jsxStyleStr, setJsxStyleStr] = useState(` fontSize: '4em',
  zIndex: 2,
  marginLeft: '-.5em'`);
  const [cssStr, setCssStr] = useState(`font-size: 4em;
  z-index: 2;
  margin-left: -0.5em;
 margin-right: 0px;`);

  return (
    <div>
      <Input.TextArea
        rows={4}
        value={jsxStyleStr}
        onChange={(e) => {
          console.log(e.target.value);
          setJsxStyleStr(e.target.value);
        }}
      />
      <div>
        <ArrowDownOutlined
          onClick={() => {
            const res = o2s(jsxStyleStr);
            setCssStr(res || '');
          }}
        />
        <ArrowUpOutlined
          onClick={() => {
            const res = cssToJS(`.main{${cssStr}}`);
            console.log(res);
            setJsxStyleStr(
              res
                .replaceAll('\n', '')
                .replaceAll(' ', '')
                .replace('//.mainmainClass:{', '')
                .replaceAll(/}/g, '')
                .replaceAll(/{/g, '')
                .replaceAll(',', ',\n') || '',
            );
          }}
        />
      </div>
      <Input.TextArea
        rows={4}
        value={cssStr}
        onChange={(e) => setCssStr(e.target.value)}
      />
    </div>
  );
};
