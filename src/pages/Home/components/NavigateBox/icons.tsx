import React from 'react';

export const IconGitlab = ({ size }: { size?: number }) => {
  return (
    <svg
      width={size || '24'}
      height={size || '24'}
      className="tanuki-logo"
      viewBox="0 0 36 36"
    >
      <path
        className="tanuki-shape tanuki-left-ear"
        fill="#e24329"
        d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
      ></path>
      <path
        className="tanuki-shape tanuki-right-ear"
        fill="#e24329"
        d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
      ></path>
      <path
        className="tanuki-shape tanuki-nose"
        fill="#e24329"
        d="M18,34.38 3,14 33,14 Z"
      ></path>
      <path
        className="tanuki-shape tanuki-left-eye"
        fill="#fc6d26"
        d="M18,34.38 11.38,14 2,14 6,25Z"
      ></path>
      <path
        className="tanuki-shape tanuki-right-eye"
        fill="#fc6d26"
        d="M18,34.38 24.62,14 34,14 30,25Z"
      ></path>
      <path
        className="tanuki-shape tanuki-left-cheek"
        fill="#fca326"
        d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
      ></path>
      <path
        className="tanuki-shape tanuki-right-cheek"
        fill="#fca326"
        d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
      ></path>
    </svg>
  );
};

export const IconConfluence = ({ size }: { size?: number }) => {
  return (
    <svg
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="99.140087%"
          y1="112.745465%"
          x2="33.8589812%"
          y2="37.7675389%"
          id="linearGradient-1"
        >
          <stop stopColor="#0052CC" offset="0%"></stop>
          <stop stopColor="#2684FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="15.2020332%"
          y1="7.21351524%"
          x2="61.141783%"
          y2="70.9663868%"
          id="linearGradient-2"
        >
          <stop stopColor="#0052CC" offset="0%"></stop>
          <stop stopColor="#2684FF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Blank-states"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Default-space-avatar">
          <g id="Group-41-Copy-3">
            <g id="Group-39">
              <g id="icon/Confluence-Blue---580">
                <g
                  id="Confluence-icon-white"
                  transform="translate(0.000000, 0.362069)"
                >
                  <path
                    d="M1.1320866,22.4072814 C0.822875429,22.9115335 0.475607504,23.4966562 0.180667622,23.9628515 C-0.08332647,24.4089686 0.0583961255,24.98432 0.499392978,25.2567813 L6.68361631,29.0624572 C6.90069526,29.1964854 7.16250721,29.2377164 7.410272,29.1768933 C7.65803679,29.1160702 7.87099385,28.9582894 8.00133158,28.7389747 C8.24870052,28.3251074 8.56742587,27.7875557 8.9146938,27.2119473 C11.3645977,23.1684166 13.8287728,23.6631545 18.2718994,25.7848188 L24.4037947,28.7009179 C24.6360313,28.8114559 24.9031274,28.8232592 25.1442093,28.7336377 C25.3852911,28.6440162 25.5798172,28.4606061 25.6834532,28.2252085 L28.6280949,21.5652756 C28.8361387,21.0896158 28.6244506,20.5349931 28.1523854,20.3189168 C26.8584556,19.7100086 24.2848673,18.4969495 21.9681621,17.3790322 C13.6337319,13.3355015 6.55041765,13.6018988 1.1320866,22.4072814 Z"
                    id="Shape"
                    fill="url(#linearGradient-1)"
                    fillRule="nonzero"
                  ></path>
                  <path
                    d="M28.8611926,6.82303865 C29.1704037,6.31878659 29.5176717,5.73366392 29.8126116,5.26746862 C30.0766056,4.82135151 29.9348831,4.24600008 29.4938862,3.97353882 L23.3096629,0.167862926 C23.0896203,0.0212419075 22.8184856,-0.0271937958 22.5612879,0.0341726612 C22.3040903,0.0955391182 22.0840316,0.261171837 21.9538908,0.491345377 C21.7065219,0.905212631 21.3877965,1.44276435 21.0405286,2.01837283 C18.5906248,6.06190347 16.1264496,5.5671656 11.683323,3.44550129 L5.57045611,0.534159231 C5.33821951,0.423621231 5.0711234,0.411817948 4.83004153,0.501439463 C4.58895965,0.591060977 4.39443356,0.774471028 4.29079759,1.00986872 L1.34615586,7.66980153 C1.13811213,8.14546135 1.34980021,8.70008411 1.82186535,8.91616039 C3.11579516,9.52506853 5.68938348,10.7381277 8.00608868,11.856045 C16.3595473,15.8948186 23.4428615,15.6284212 28.8611926,6.82303865 Z"
                    id="Shape"
                    fill="url(#linearGradient-2)"
                    fillRule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const IconEvolute = ({ size }: { size?: number }) => {
  return <IconConfluence size={16}></IconConfluence>;
};

export const IconMap: Record<string, React.ReactElement> = {
  gitlab: (
    <span className="anticon">
      <IconGitlab size={16}></IconGitlab>
    </span>
  ),
  confluence: <IconConfluence size={16} />,
  evolute: <IconEvolute />,
  'mp.weixin.qq.com': (
    <img
      src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/icon/login/mp_app698610.png"
      alt=""
      height={16}
    />
  ),
  taro: (
    <img
      src="https://storage.360buyimg.com/pubfree-bucket/taro-docs/c07c6984de/img/logo-taro.png"
      alt="Taro logo"
      height={16}
    />
  ),
  umijs: (
    <img
      src="https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png"
      alt="UmiJS"
      height={16}
    />
  ),
  iconfont: (
    <img
      src="http://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg"
      height={16}
    />
  ),
  swagger: (
    <img
      height="16"
      width="16"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAYFBMVEUAAABUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwB0lzB/n0BfhxBpjyC0x4////+qv4CJp1D09++ft3C/z5/K16/U379UfwDf58/q79+Ur2D2RCk9AAAAHXRSTlMAEEAwn9//z3Agv4/vYID/////////////////UMeji1kAAAD8SURBVHgBlZMFAoQwDATRxbXB7f+vPKnlXAZn6k2cf3A9z/PfOC8IIYni5FmmABM8FMhwT17c9hnhiZL1CwvEL1tmPD0qSKq6gaStW/kMXanVmAVRDUlH1OvuuTINo6k90Sxf8qsOtF6g4ff1osP3OnMcV7d4pzdIUtu1oA4V0DZoKmxmlEYvtDUjjS3tmKmqB+pYy8pD1VPf7jPE0I40HHcaBwnue6fGzgyS5tXIU96PV7rkDWHNLV0DK4FkoKmFpN5oUnvi8KoeA2/JXsmXQuokx0siR1G8tLkN6eB9sLwJp/yymcyaP/TrP+RPmbMMixcJVgTR1aUZ93oGXsgXQAaG6EwAAAAASUVORK5CYII="
    />
  ),
  courseop: (
    <img
      height="16"
      width="16"
      src="https://oimagec7.ydstatic.com/image?id=-2867625029112634712&amp;product=xue&amp;w=30"
    ></img>
  ),
};
