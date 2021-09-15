import React from "react";

type CustomSVGProps = { selected:string};

export const HomeSVG = ({selected}:CustomSVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33.333" height="33.333" viewBox="0 0 33.333 33.333">
    <g id="Group_631" data-name="Group 631" transform="translate(0 250)">
        <g id="Group_629" data-name="Group 629" transform="translate(0 -250)">
        <path id="Path_691" data-name="Path 691" d="M0-250H33.333v33.333H0Z" transform="translate(0 250)" fill="none"/>
        </g>
        <g id="Group_630" data-name="Group 630" transform="translate(5.556 -245.833)">
        <path id="Path_692" data-name="Path 692" d="M56.778-212.278l8.333,6.25v12.5H48.445v-12.5l8.333-6.25m0-3.472-11.111,8.333v16.667H67.889v-16.667Zm3.832,22.222H52.946v-9.722H60.61Z" transform="translate(-45.667 215.75)" fill={selected==="home"?"#902fff":"#a2a2c2"}/>
        </g>
    </g>
    </svg>
  );
};
export const DiscoverSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22.866" viewBox="0 0 23 22.866">
            <g id="Group_13" data-name="Group 13" transform="translate(-381.547 -257.97)">
            <path id="Path_10" data-name="Path 10" d="M393.114,257.97a11.367,11.367,0,0,1,10.56,7.252c.215.578,1.039,1.5-.046,1.912a1.628,1.628,0,0,1-2.387-1.008,8.152,8.152,0,0,0-3.567-4.277c-.589-.36-1-.608-1.29.4a2.269,2.269,0,0,1-2.695,1.572c-1.253-.135-1.869.253-1.711,1.628s-.6,1.86-1.893,1.8c-.671-.031-1.467-.214-1.51.94-.039,1.044.543,1.17,1.34,1.135.777-.035,1,.45.926,1.093-.1.8.471,1.883-.411,2.35-1.016.538-1.58-.538-2.2-1.13-1.028-.978-2.007-2.007-3.021-3-.224-.219-.433-.664-.775-.508-.436.2-.369.72-.372,1.138a8.979,8.979,0,0,0,7.6,8.92c.565.1,1.259.013,1.445.854.309,1.4-.129,1.9-1.631,1.773-4.669-.386-9.235-4.867-9.832-9.651A11.493,11.493,0,0,1,393.114,257.97Z" fill={selected==="discover"?"#902fff":"#a2a2c2"}/>
            <path id="Path_11" data-name="Path 11" d="M417.637,295.053a4.886,4.886,0,0,1,3.016-4.719,5.182,5.182,0,0,1,7.166,6.123,2.076,2.076,0,0,0,.721,2.573,11.46,11.46,0,0,1,1.561,1.637,1.154,1.154,0,0,1-.14,1.662,1.091,1.091,0,0,1-1.548.04,17.626,17.626,0,0,1-1.847-1.752,1.8,1.8,0,0,0-2.207-.58A5.155,5.155,0,0,1,417.637,295.053Zm7.768-.041a2.384,2.384,0,0,0-2.582-2.526,2.606,2.606,0,0,0-2.688,2.652,2.843,2.843,0,0,0,2.673,2.617A2.606,2.606,0,0,0,425.405,295.012Z" transform="translate(-25.843 -22.787)" fill={selected==="discover"?"#902fff":"#a2a2c2"}/>
            </g>
        </svg>  
    );
  };
export const ActivitySVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26.122" height="26" viewBox="0 0 26.122 26">
            <g id="Group_628" data-name="Group 628" transform="translate(0.122 109.324)">
            <rect id="Rectangle_66" data-name="Rectangle 66" width="26" height="26" transform="translate(0 -109.324)" fill="none"/>
            <g id="Group_627" data-name="Group 627" transform="translate(1.083 -106.834)">
                <path id="Path_690" data-name="Path 690" d="M19.684-89.319l-2.231-1.018,2.231-1.018L20.7-93.586l1.018,2.231,2.231,1.018L21.72-89.319,20.7-87.089Zm-10.893,4.4,1.018-2.23,2.231-1.018L9.808-89.189,8.791-91.42,7.772-89.189l-2.23,1.018,2.23,1.018Zm4.873-5.414,1.18-2.61,2.61-1.18-2.61-1.18-1.18-2.61-1.18,2.61-2.61,1.18,2.61,1.18ZM9.332-77.884l6.5-6.508,4.331,4.331,9.2-10.352L27.838-91.94,20.16-83.31l-4.331-4.331L7.708-79.509Z" transform="translate(-5.542 97.917)" fill={selected==="activity"?"#902fff":"#a2a2c2"} stroke={selected==="activity"?"#902fff":"#a2a2c2"} strokeWidth="1"/>
            </g>
            </g>
        </svg>
    );
};
export const TradingSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23.3" height="21.338" viewBox="0 0 23.3 21.338">
            <g id="Group_12" data-name="Group 12" transform="translate(-385.634 -261.907)">
                <path id="Path_9" data-name="Path 9" d="M397.175,283.24c-2.829,0-5.659.015-8.488-.005-2.111-.015-3.032-.845-3.039-2.771q-.028-7.847,0-15.694c.006-2,.928-2.84,3.141-2.847q8.488-.028,16.976,0c2.166.009,3.142.9,3.152,2.875q.037,7.847,0,15.694c-.01,1.9-.971,2.729-3.091,2.743C402.94,283.254,400.057,283.24,397.175,283.24Zm-1.051-10.628c0,1.413-.013,2.827.005,4.24.009.686.25,1.336,1.109,1.363.886.027,1.162-.672,1.171-1.317q.061-4.312-.005-8.626a1.112,1.112,0,0,0-1.3-1.189c-.82.068-.975.668-.982,1.288C396.113,269.784,396.123,271.2,396.124,272.612Zm-5.11,1.688c0,.925-.029,1.851.011,2.774a1.1,1.1,0,0,0,1.012,1.147,1.018,1.018,0,0,0,1.174-.966,28.361,28.361,0,0,0,.027-5.681,1.051,1.051,0,0,0-1.175-.98,1,1,0,0,0-1.04,1.078C390.983,272.547,391.011,273.424,391.014,274.3Zm10.2,1.777c.144.824-.255,2.14,1.21,2.095,1.344-.041,1.112-1.3,1.15-2.2a2.213,2.213,0,0,0-.229-1.277,1.1,1.1,0,0,0-1.169-.576.92.92,0,0,0-.845.762A9.824,9.824,0,0,0,401.211,276.077Z" fill={selected==="trading"?"#902fff":"#a2a2c2"}/>
            </g>
        </svg>
    );
};
export const AboutSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18">
        <g id="Group_15" data-name="Group 15" transform="translate(-57 -259)">
          <g id="Rectangle_5" data-name="Rectangle 5" transform="translate(57 259)" fill="#fff" stroke={selected==="about"?"#902fff":"#a2a2c2"} strokeWidth="2">
            <rect width="28" height="4" rx="2" stroke="none"/>
            <rect x="1" y="1" width="26" height="2" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_6" data-name="Rectangle 6" transform="translate(64 266)" fill="#fff" stroke={selected==="about"?"#902fff":"#a2a2c2"} strokeWidth="2">
            <rect width="21" height="4" rx="2" stroke="none"/>
            <rect x="1" y="1" width="19" height="2" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_7" data-name="Rectangle 7" transform="translate(64 273)" fill="#fff" stroke={selected==="about"?"#902fff":"#a2a2c2"} strokeWidth="2">
            <rect width="21" height="4" rx="2" stroke="none"/>
            <rect x="1" y="1" width="19" height="2" rx="1" fill="none"/>
          </g>
        </g>
      </svg>
    );
};
export const OverviewSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
        <g id="Group_11" data-name="Group 11" transform="translate(-1670 -284)">
          <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(1670 284)" fill="none" stroke={selected} strokeWidth="2">
            <rect width="10" height="10" rx="2" stroke="none"/>
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_2" data-name="Rectangle 2" transform="translate(1681 284)" fill="none" stroke={selected} strokeWidth="2">
            <rect width="10" height="10" rx="2" stroke="none"/>
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(1681 296)" fill="none" stroke={selected} strokeWidth="2">
            <rect width="10" height="10" rx="2" stroke="none"/>
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(1670 296)" fill="none" stroke={selected} strokeWidth="2">
            <rect width="10" height="10" rx="2" stroke="none"/>
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none"/>
          </g>
        </g>
      </svg>
      
    );
};
export const CreationSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24">
        <g id="fi-rr-book_1" data-name="fi-rr-book 1" transform="translate(-2)">
          <path id="Vector" d="M15,0H5A5.006,5.006,0,0,0,0,5V20a4,4,0,0,0,4,4H15a5.006,5.006,0,0,0,5-5V5a5.006,5.006,0,0,0-5-5Zm3,5V16H6V2h9a3,3,0,0,1,3,3ZM4,2.172V16a3.98,3.98,0,0,0-2,.537V5A3,3,0,0,1,4,2.172ZM15,22H4a2,2,0,0,1,0-4H18v1a3,3,0,0,1-3,3Z" transform="translate(2)" fill={selected}/>
        </g>
      </svg>
      
      
    );
};
export const CollectionSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23.166" height="23.166" viewBox="0 0 23.166 23.166">
        <g id="Group_14" data-name="Group 14" transform="translate(-381.992 -257.262)">
            <path id="Path_12" data-name="Path 12" d="M406.848,258.267c2.077,0,4.153-.015,6.23,0,1.807.017,2.62.821,2.627,2.628q.025,6.23,0,12.46c-.007,1.807-.82,2.62-2.627,2.627q-6.23.025-12.46,0c-1.807-.007-2.62-.82-2.627-2.627q-.025-6.23,0-12.46c.007-1.807.82-2.611,2.627-2.628C402.7,258.252,404.772,258.267,406.848,258.267Zm-.135,15.509c1.754,0,3.508.006,5.262,0,.847,0,1.161-.381.61-1.109-.947-1.25-1.949-2.459-2.931-3.683-.437-.544-.843-.435-1.237.06-.689.867-1.407,1.713-2.068,2.6-.418.561-.674.549-1.13,0-1.791-2.17-1.811-2.153-3.543.163-.194.259-.394.512-.58.776-.566.805-.3,1.19.631,1.195C403.39,273.782,405.052,273.776,406.714,273.776Z" transform="translate(-11.559 0)" fill="#fefefe" stroke={selected} strokeWidth="2"/>
            <path id="Path_13" data-name="Path 13" d="M391.276,292.146c-2.211,0-4.423.014-6.634,0-1.813-.015-2.634-.814-2.641-2.607-.017-4.469,0-8.938-.009-13.407,0-.848.1-1.688,1.168-1.651.966.034,1.055.838,1.053,1.63q-.013,5.943,0,11.887c0,1.706.224,1.933,1.9,1.936q5.529.011,11.057,0c.276,0,.553.006.829,0,.843-.023,1.69.081,1.666,1.151-.022.967-.818,1.072-1.615,1.068C395.792,292.139,393.534,292.147,391.276,292.146Z" transform="translate(0 -11.724)" fill={selected}/>
        </g>
        </svg>
  
    );
};
export const SettingSVG = ({selected}:CustomSVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21.593" height="24" viewBox="0 0 21.593 24">
        <g id="fi-rr-settings_1" data-name="fi-rr-settings 1" transform="translate(-1.203)">
            <path id="Vector" d="M4,0A4,4,0,1,0,6.828,1.172,4,4,0,0,0,4,0ZM4,6a2,2,0,1,1,1.414-.586A2,2,0,0,1,4,6Z" transform="translate(8 8)" fill={selected}/>
            <path id="Vector-2" data-name="Vector" d="M20.091,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,0,0-3-5.2l-.445.257A8.977,8.977,0,0,0,13.8,3.513V3a3,3,0,1,0-6,0v.513A8.977,8.977,0,0,0,4.949,5.159L4.5,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29L1.5,13.9a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,7.8,20.487V21a3,3,0,1,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,1,1-1,1.733L17,16.738a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,1,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,5.8,16.9a1,1,0,0,0-1.215-.165L3.5,17.362a1,1,0,1,1-1-1.732L3.588,15a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75,1,1,0,0,0-.465-1.129L2.5,8.366a1,1,0,1,1,1-1.733l1.086.628A1,1,0,0,0,5.8,7.1,6.984,6.984,0,0,1,9.046,5.225,1,1,0,0,0,9.8,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,15.791,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732L18.006,9a1,1,0,0,0-.463,1.129Z" transform="translate(1.203 0)" fill={selected}/>
        </g>
        </svg>  
    );
};