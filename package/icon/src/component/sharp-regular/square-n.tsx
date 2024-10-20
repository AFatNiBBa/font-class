
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=sharp-regular square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm288 96l48 0 0 24 0 208 0 24-35.1 0-7.2-8.5L160 217.5 160 360l0 24-48 0 0-24 0-208 0-24 35.1 0 7.2 8.5L288 294.5 288 152l0-24z" />
    </Icon>
);

export default SquareN;