import React, { Component } from "react";
import Logo from "./logo";

class Topbar extends Component {
  state = {};
  render() {
    return (
      <div className="topbar">
        <div className="container">
          <Logo></Logo>
          <button
            className="btn-darktheme"
            onClick={() => {
              document.body.classList.toggle("dark-theme");
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                //   fill-rule="evenodd"
                //   clip-rule="evenodd"
                d="M15.6436 5.5969V0.355427C15.6436 0.261142 15.6811 0.170754 15.7478 0.104103C15.8145 0.0374521 15.9049 0 15.9992 0C16.0935 0 16.184 0.0374521 16.2507 0.104103C16.3174 0.170754 16.3549 0.261142 16.3549 0.355427V5.5969C16.3549 5.69119 16.3174 5.78157 16.2507 5.84823C16.184 5.91488 16.0935 5.95233 15.9992 5.95233C15.9049 5.95233 15.8145 5.91488 15.7478 5.84823C15.6811 5.78157 15.6436 5.69119 15.6436 5.5969ZM26.8123 4.6864L23.1053 8.39267C23.0393 8.45967 23.0025 8.55003 23.0029 8.64408C23.0034 8.73812 23.041 8.82815 23.1076 8.89456C23.1742 8.96097 23.2643 8.99833 23.3584 8.9985C23.4525 8.99867 23.5428 8.96166 23.6096 8.89548L27.3147 5.18922C27.3782 5.12195 27.4129 5.03262 27.4116 4.94016C27.4103 4.84769 27.373 4.75937 27.3076 4.69395C27.2422 4.62853 27.1539 4.59118 27.0615 4.58976C26.969 4.58835 26.8796 4.62301 26.8123 4.6864ZM15.7832 8.57777C13.8523 8.63442 12.0196 9.44116 10.6738 10.8268C9.3281 12.2124 8.57537 14.0677 8.5754 15.9991C8.56813 16.9787 8.75482 17.9501 9.12473 18.8572C9.49463 19.7643 10.0404 20.5894 10.7307 21.2846C11.4209 21.9799 12.2419 22.5318 13.1464 22.9083C14.0509 23.2849 15.021 23.4788 16.0008 23.4788C16.9806 23.4788 17.9507 23.2849 18.8552 22.9083C19.7597 22.5318 20.5808 21.9799 21.271 21.2846C21.9612 20.5894 22.507 19.7643 22.8769 18.8572C23.2468 17.9501 23.4335 16.9787 23.4263 15.9991C23.4263 15.0058 23.2269 14.0226 22.8401 13.1077C22.4532 12.1928 21.8866 11.3649 21.1739 10.6729C20.4613 9.9809 19.6169 9.43887 18.691 9.07899C17.765 8.71911 16.7762 8.54869 15.7832 8.57777ZM15.9999 9.28661V22.7136C14.22 22.7121 12.5135 22.0042 11.2555 20.7453C9.99745 19.4865 9.29077 17.7797 9.29077 16.0001C9.29077 14.2205 9.99745 12.5138 11.2555 11.2549C12.5135 9.99605 14.22 9.28805 15.9999 9.28661ZM26.4058 15.6445H31.6484C31.7421 15.6454 31.8317 15.6833 31.8976 15.7499C31.9636 15.8165 32.0006 15.9064 32.0006 16.0001C32.0006 16.0938 31.9636 16.1837 31.8976 16.2503C31.8317 16.3169 31.7421 16.3547 31.6484 16.3556H26.4058C26.3121 16.3547 26.2226 16.3169 26.1566 16.2503C26.0907 16.1837 26.0537 16.0938 26.0537 16.0001C26.0537 15.9064 26.0907 15.8165 26.1566 15.7499C26.2226 15.6833 26.3121 15.6454 26.4058 15.6445ZM27.3144 26.8109L23.6093 23.1046C23.5424 23.0386 23.4522 23.0017 23.3582 23.002C23.2642 23.0022 23.1741 23.0395 23.1076 23.1059C23.041 23.1722 23.0034 23.2622 23.0029 23.3561C23.0025 23.4501 23.0391 23.5405 23.105 23.6075L26.8119 27.3137C26.8793 27.3769 26.9686 27.4114 27.061 27.4099C27.1534 27.4084 27.2415 27.3711 27.3068 27.3057C27.3721 27.2404 27.4094 27.1522 27.4108 27.0599C27.4122 26.9675 27.3776 26.8782 27.3144 26.8109ZM16.3549 26.4032V31.6445C16.3549 31.7388 16.3174 31.8293 16.2507 31.896C16.184 31.9626 16.0935 32 15.9992 32C15.9049 32 15.8145 31.9626 15.7478 31.896C15.6811 31.8293 15.6436 31.7388 15.6436 31.6445V26.4032C15.6436 26.3089 15.6811 26.2185 15.7478 26.1518C15.8145 26.0852 15.9049 26.0477 15.9992 26.0477C16.0935 26.0477 16.184 26.0852 16.2507 26.1518C16.3174 26.2185 16.3549 26.3089 16.3549 26.4032ZM5.18782 27.3137L8.89511 23.6075C8.95849 23.5402 8.99317 23.4509 8.9918 23.3584C8.99043 23.266 8.95313 23.1778 8.8878 23.1124C8.82246 23.047 8.73423 23.0097 8.64181 23.0082C8.54938 23.0068 8.46002 23.0413 8.39267 23.1046L4.68537 26.8109C4.6221 26.8782 4.5875 26.9675 4.58891 27.0599C4.59032 27.1522 4.62762 27.2404 4.69291 27.3057C4.75821 27.3711 4.84638 27.4084 4.93875 27.4099C5.03112 27.4114 5.12045 27.3769 5.18782 27.3137ZM5.59472 16.3556H0.352127C0.258421 16.3547 0.168865 16.3169 0.102927 16.2503C0.0369892 16.1837 0 16.0938 0 16.0001C0 15.9064 0.0369892 15.8165 0.102927 15.7499C0.168865 15.6833 0.258421 15.6454 0.352127 15.6445H5.59472C5.68843 15.6454 5.77799 15.6833 5.84392 15.7499C5.90986 15.8165 5.94685 15.9064 5.94685 16.0001C5.94685 16.0938 5.90986 16.1837 5.84392 16.2503C5.77799 16.3169 5.68843 16.3547 5.59472 16.3556ZM4.68582 5.18922L8.39312 8.89548C8.46046 8.95888 8.54985 8.99354 8.64233 8.99212C8.73482 8.99071 8.82311 8.95336 8.88848 8.88793C8.95385 8.82251 8.99116 8.7342 8.99248 8.64173C8.9938 8.54926 8.95904 8.45994 8.89557 8.39267L5.18827 4.6864C5.12093 4.623 5.03153 4.58835 4.93905 4.58976C4.84657 4.59118 4.75827 4.62852 4.6929 4.69395C4.62753 4.75938 4.59023 4.84769 4.5889 4.94016C4.58758 5.03263 4.62235 5.12195 4.68582 5.18922Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Topbar;
