
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=regular arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 96c-13.3 0-24 10.7-24 24l0 240c0 13.3 10.7 24 24 24s24-10.7 24-24l0-182.1L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-231-231L296 144c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 96z" />
    </Icon>
);

export default ArrowUpLeft;