import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { styled, useLocation, useRouteData } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BookDetailPage: React.FC = () => {
  // const { name } = useModel('global');
  const routeData = useLocation();
  console.log(routeData);
  const { data } = useRequest(async () => {
    const res = await fetch(routeData.state.src);
    return res.text();
  });

  return (
    <PageContainer ghost>
      <MarkdownWrapper>
        <div>
          <Markdown
            urlTransform={(url) => {
              console.log('url', url, process.env.PLATFORM);
              if (process.env.PLATFORM === 'git') {
                return url.replace(
                  '/assets/images',
                  '/project-manager-umi/assets/images',
                );
              } else {
                return url;
              }
            }}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                console.log('match', match, className);
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    children={String(children).replace(/\n$/, '')}
                    // style={dark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {data}
          </Markdown>
        </div>
      </MarkdownWrapper>
    </PageContainer>
  );
};

export default BookDetailPage;

const MarkdownWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  & > div {
    max-width: 600px;
  }
  img {
    width: 100%;
  }
`;
