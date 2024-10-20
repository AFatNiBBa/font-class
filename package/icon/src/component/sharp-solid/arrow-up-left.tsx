
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=sharp-solid arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 96L32 96l0 32 0 224 0 32 64 0 0-32 0-146.7L297.4 406.6 320 429.3 365.3 384l-22.6-22.6L141.3 160 288 160l32 0 0-64-32 0L64 96z" />
    </Icon>
);

export default ArrowUpLeft;