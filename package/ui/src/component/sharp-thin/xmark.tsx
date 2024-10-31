
import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=sharp-thin xmark}
 * @preview ![xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/xmark.svg)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 244.7L45.9 98.6 34.6 109.9 180.7 256 34.6 402.1l11.3 11.3L192 267.3 338.1 413.4l11.3-11.3L203.3 256 349.4 109.9 338.1 98.6 192 244.7z" />
    </Icon>
);

export default Xmark;