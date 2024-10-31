
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=sharp-regular square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM351.9 136L246 377.6 239.7 392l-31.4 0L202 377.6 96.1 136l52.4 0L224 308.2 299.5 136l52.4 0z" />
    </Icon>
);

export default SquareV;