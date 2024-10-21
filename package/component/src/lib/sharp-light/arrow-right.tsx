
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=sharp-light arrow-right}
 * @preview ![arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right.svg)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M435.3 267.3L446.6 256l-11.3-11.3-168-168L256 65.4 233.4 88l11.3 11.3L385.4 240 16 240 0 240l0 32 16 0 369.4 0L244.7 412.7 233.4 424 256 446.6l11.3-11.3 168-168z" />
    </Icon>
);

export default ArrowRight;