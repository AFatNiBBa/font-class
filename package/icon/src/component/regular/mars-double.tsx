
import { Icon } from "../../index";

/**
 * A component that renders the `mars-double` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=regular mars-double}
 * @preview ![mars-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mars-double.svg)
 */
const MarsDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 56c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1-83.7 83.7C338.7 227.2 352 264.1 352 304c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L366.1 80 312 80c-13.3 0-24-10.7-24-24zM176 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM480 158.1L558.1 80 504 80c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1-83.7 83.7C530.7 227.2 544 264.1 544 304c0 97.2-78.8 176-176 176c-22.6 0-44.2-4.3-64-12c14.3-11.2 27.1-24.2 38-38.6c8.4 1.7 17.1 2.6 26 2.6c70.7 0 128-57.3 128-128c0-35.7-14.7-68.1-38.3-91.3C471.3 202.5 480 186.3 480 168l0-9.9z" />
    </Icon>
);

export default MarsDouble;