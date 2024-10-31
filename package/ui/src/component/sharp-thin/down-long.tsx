
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=sharp-thin down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M120 336l0-16 0-304 80 0 0 304 0 16 16 0 88 0 0 9.4-144 144L16 345.4l0-9.4 88 0 16 0zM0 352L148.7 500.7 160 512l11.3-11.3L320 352l0-16 0-16-16 0-72 0-16 0 0-16 0-288 0-16L200 0 120 0 104 0l0 16 0 288 0 16-16 0-72 0L0 320l0 16 0 16z" />
    </Icon>
);

export default DownLong;