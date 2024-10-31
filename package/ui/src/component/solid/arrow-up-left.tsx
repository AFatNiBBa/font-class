
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=solid arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-146.7L297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 160 288 160c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 96z" />
    </Icon>
);

export default ArrowUpLeft;