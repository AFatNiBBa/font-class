
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=sharp-regular arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M328 416l24 0 0-24 0-240 0-24-48 0 0 24 0 182.1L81 111l-17-17L30.1 128l17 17 223 223L88 368l-24 0 0 48 24 0 240 0z" />
    </Icon>
);

export default ArrowDownRight;