
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=sharp-thin arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496c132.5 0 240-107.5 240-240l0-8 16 0 0 8c0 141.4-114.6 256-256 256S0 397.4 0 256l0-8 16 0 0 8c0 132.5 107.5 240 240 240zM390.1 197.2l-128 152-6.1 7.3-6.1-7.3-128-152-5.2-6.1L129 180.7l5.2 6.1L248 322.1 248 8l0-8 16 0 0 8 0 314.1L377.9 186.8l5.2-6.1L395.3 191l-5.2 6.1z" />
    </Icon>
);

export default ArrowDownToArc;