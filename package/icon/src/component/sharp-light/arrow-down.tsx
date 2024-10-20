
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=sharp-light arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M203.3 467.3L192 478.6l-11.3-11.3-168-168L1.4 288 24 265.4l11.3 11.3L176 417.4 176 48l0-16 32 0 0 16 0 369.4L348.7 276.7 360 265.4 382.6 288l-11.3 11.3-168 168z" />
    </Icon>
);

export default ArrowDown;