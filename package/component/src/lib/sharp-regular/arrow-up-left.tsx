
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=sharp-regular arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 96L32 96l0 24 0 240 0 24 48 0 0-24 0-182.1L303 401l17 17L353.9 384l-17-17-223-223L296 144l24 0 0-48-24 0L56 96z" />
    </Icon>
);

export default ArrowUpLeft;