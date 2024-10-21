
import { Icon } from "../../index";

/**
 * A component that renders the `mars-double` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=light mars-double}
 * @preview ![mars-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mars-double.svg)
 */
const MarsDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 48c0-8.8 7.2-16 16-16l112 0c8.8 0 16 7.2 16 16l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-73.4L311.3 191.4C336.7 221.9 352 261.2 352 304c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c42.8 0 82.1 15.3 112.6 40.7L393.4 64 320 64c-8.8 0-16-7.2-16-16zM176 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288zM469.4 190.1c4.5-5.6 7.8-12.3 9.5-19.6L585.4 64 512 64c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0c8.8 0 16 7.2 16 16l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-73.4-100 100c22.6 30.6 36 68.4 36 109.4c0 101.6-82.4 184-184 184c-20.7 0-40.5-3.4-59.1-9.7c10.1-7.6 19.5-16.2 28.1-25.5c10 2.1 20.3 3.2 30.9 3.2c83.9 0 152-68.1 152-152c0-38.3-14.1-73.3-37.5-100l-5.1-5.9z" />
    </Icon>
);

export default MarsDouble;