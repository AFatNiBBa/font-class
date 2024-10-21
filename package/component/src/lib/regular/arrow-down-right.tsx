
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=regular arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M328 416c13.3 0 24-10.7 24-24l0-240c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 182.1L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l231 231L88 368c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0z" />
    </Icon>
);

export default ArrowDownRight;