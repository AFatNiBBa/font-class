
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=sharp-thin arrow-left}
 * @preview ![arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-left.svg)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M10.5 250.2l-6 5.8 6 5.8 184 176 5.8 5.5 11.1-11.6-5.8-5.5L35.9 264 440 264l8 0 0-16-8 0L35.9 248 205.5 85.8l5.8-5.5L200.3 68.7l-5.8 5.5-184 176z" />
    </Icon>
);

export default ArrowLeft;