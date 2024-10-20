
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=solid arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 384c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-146.7 0L342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L96 306.7 96 160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224z" />
    </Icon>
);

export default ArrowDownLeft;