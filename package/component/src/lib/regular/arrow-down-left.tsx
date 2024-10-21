
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=regular arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 416c-13.3 0-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1L311 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-231 231L296 368c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 416z" />
    </Icon>
);

export default ArrowDownLeft;