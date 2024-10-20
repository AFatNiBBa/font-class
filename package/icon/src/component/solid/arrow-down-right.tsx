
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=solid arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 416c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 146.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 352 96 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0z" />
    </Icon>
);

export default ArrowDownRight;