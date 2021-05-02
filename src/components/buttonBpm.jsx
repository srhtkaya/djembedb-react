import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

class ButtonBpm extends React.PureComponent {
  state = {};

  toggleOpen = () => {
    if (this.state.open) {
      this.setState(() => ({
        open: false,
      }));
    } else {
      this.setState(() => ({
        open: true,
      }));
    }
  };

  render() {
    return (
      <React.Fragment>
        <Slider
          defaultValue={this.props.defaultTempo}
          onChange={this.props.OnTempoChange}
          aria-labelledby="continuous-slider"
          marks
          step={10}
          min={20}
          max={360}
          valueLabelDisplay="auto"
          className={this.getSliderClasses()}
        />
        <Button
          aria-label="Toggle Dark/Light Theme"
          className="btn-darktheme"
          onClick={() => {
            this.toggleOpen();
          }}
        >
          BPM
          {/* <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.6436 13.5969V8.35543C23.6436 8.26114 23.6811 8.17075 23.7478 8.1041C23.8145 8.03745 23.9049 8 23.9992 8C24.0935 8 24.184 8.03745 24.2507 8.1041C24.3174 8.17075 24.3549 8.26114 24.3549 8.35543V13.5969C24.3549 13.6912 24.3174 13.7816 24.2507 13.8482C24.184 13.9149 24.0935 13.9523 23.9992 13.9523C23.9049 13.9523 23.8145 13.9149 23.7478 13.8482C23.6811 13.7816 23.6436 13.6912 23.6436 13.5969ZM34.8123 12.6864L31.1053 16.3927C31.0393 16.4597 31.0025 16.55 31.0029 16.6441C31.0034 16.7381 31.041 16.8282 31.1076 16.8946C31.1742 16.961 31.2643 16.9983 31.3584 16.9985C31.4525 16.9987 31.5428 16.9617 31.6096 16.8955L35.3147 13.1892C35.3782 13.1219 35.4129 13.0326 35.4116 12.9402C35.4103 12.8477 35.373 12.7594 35.3076 12.694C35.2422 12.6285 35.1539 12.5912 35.0615 12.5898C34.969 12.5883 34.8796 12.623 34.8123 12.6864ZM23.7832 16.5778C21.8523 16.6344 20.0196 17.4412 18.6738 18.8268C17.3281 20.2124 16.5754 22.0677 16.5754 23.9991C16.5681 24.9787 16.7548 25.9501 17.1247 26.8572C17.4946 27.7643 18.0404 28.5894 18.7307 29.2846C19.4209 29.9799 20.2419 30.5318 21.1464 30.9083C22.0509 31.2849 23.021 31.4788 24.0008 31.4788C24.9806 31.4788 25.9507 31.2849 26.8552 30.9083C27.7597 30.5318 28.5808 29.9799 29.271 29.2846C29.9612 28.5894 30.507 27.7643 30.8769 26.8572C31.2468 25.9501 31.4335 24.9787 31.4263 23.9991C31.4263 23.0058 31.2269 22.0226 30.8401 21.1077C30.4532 20.1928 29.8866 19.3649 29.1739 18.6729C28.4613 17.9809 27.6169 17.4389 26.691 17.079C25.765 16.7191 24.7762 16.5487 23.7832 16.5778ZM23.9999 17.2866V30.7136C22.22 30.7121 20.5135 30.0042 19.2555 28.7453C17.9974 27.4865 17.2908 25.7797 17.2908 24.0001C17.2908 22.2205 17.9974 20.5138 19.2555 19.2549C20.5135 17.9961 22.22 17.288 23.9999 17.2866ZM34.4058 23.6445H39.6484C39.7421 23.6454 39.8317 23.6833 39.8976 23.7499C39.9636 23.8165 40.0006 23.9064 40.0006 24.0001C40.0006 24.0938 39.9636 24.1837 39.8976 24.2503C39.8317 24.3169 39.7421 24.3547 39.6484 24.3556H34.4058C34.3121 24.3547 34.2226 24.3169 34.1566 24.2503C34.0907 24.1837 34.0537 24.0938 34.0537 24.0001C34.0537 23.9064 34.0907 23.8165 34.1566 23.7499C34.2226 23.6833 34.3121 23.6454 34.4058 23.6445ZM35.3144 34.8109L31.6093 31.1046C31.5424 31.0386 31.4522 31.0017 31.3582 31.002C31.2642 31.0022 31.1741 31.0395 31.1076 31.1059C31.041 31.1722 31.0034 31.2622 31.0029 31.3561C31.0025 31.4501 31.0391 31.5405 31.105 31.6075L34.8119 35.3137C34.8793 35.3769 34.9686 35.4114 35.061 35.4099C35.1534 35.4084 35.2415 35.3711 35.3068 35.3057C35.3721 35.2404 35.4094 35.1522 35.4108 35.0599C35.4122 34.9675 35.3776 34.8782 35.3144 34.8109ZM24.3549 34.4032V39.6445C24.3549 39.7388 24.3174 39.8293 24.2507 39.896C24.184 39.9626 24.0935 40 23.9992 40C23.9049 40 23.8145 39.9626 23.7478 39.896C23.6811 39.8293 23.6436 39.7388 23.6436 39.6445V34.4032C23.6436 34.3089 23.6811 34.2185 23.7478 34.1518C23.8145 34.0852 23.9049 34.0477 23.9992 34.0477C24.0935 34.0477 24.184 34.0852 24.2507 34.1518C24.3174 34.2185 24.3549 34.3089 24.3549 34.4032ZM13.1878 35.3137L16.8951 31.6075C16.9585 31.5402 16.9932 31.4509 16.9918 31.3584C16.9904 31.266 16.9531 31.1778 16.8878 31.1124C16.8225 31.047 16.7342 31.0097 16.6418 31.0082C16.5494 31.0068 16.46 31.0413 16.3927 31.1046L12.6854 34.8109C12.6221 34.8782 12.5875 34.9675 12.5889 35.0599C12.5903 35.1522 12.6276 35.2404 12.6929 35.3057C12.7582 35.3711 12.8464 35.4084 12.9387 35.4099C13.0311 35.4114 13.1204 35.3769 13.1878 35.3137ZM13.5947 24.3556H8.35213C8.25842 24.3547 8.16886 24.3169 8.10293 24.2503C8.03699 24.1837 8 24.0938 8 24.0001C8 23.9064 8.03699 23.8165 8.10293 23.7499C8.16886 23.6833 8.25842 23.6454 8.35213 23.6445H13.5947C13.6884 23.6454 13.778 23.6833 13.8439 23.7499C13.9099 23.8165 13.9468 23.9064 13.9468 24.0001C13.9468 24.0938 13.9099 24.1837 13.8439 24.2503C13.778 24.3169 13.6884 24.3547 13.5947 24.3556ZM12.6858 13.1892L16.3931 16.8955C16.4605 16.9589 16.5499 16.9935 16.6423 16.9921C16.7348 16.9907 16.8231 16.9534 16.8885 16.8879C16.9539 16.8225 16.9912 16.7342 16.9925 16.6417C16.9938 16.5493 16.959 16.4599 16.8956 16.3927L13.1883 12.6864C13.1209 12.623 13.0315 12.5884 12.939 12.5898C12.8466 12.5912 12.7583 12.6285 12.6929 12.694C12.6275 12.7594 12.5902 12.8477 12.5889 12.9402C12.5876 13.0326 12.6223 13.1219 12.6858 13.1892Z" />
          </svg> */}
        </Button>
      </React.Fragment>
    );
  }
  getSliderClasses = () => {
    let classes = "slider bpm-slider";
    return (classes += this.state.open ? " " : " hidden");
  };
}

export default ButtonBpm;
