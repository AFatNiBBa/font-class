
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=sharp-thin arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16c132.5 0 240 107.5 240 240l0 8 16 0 0-8C512 114.6 397.4 0 256 0S0 114.6 0 256l0 8 16 0 0-8C16 123.5 123.5 16 256 16zM390.1 314.8l-128-152-6.1-7.3-6.1 7.3-128 152-5.2 6.1L129 331.3l5.2-6.1L248 189.9 248 504l0 8 16 0 0-8 0-314.1L377.9 325.2l5.2 6.1L395.3 321l-5.2-6.1z" />
    </Icon>
);

export default ArrowUpToArc;