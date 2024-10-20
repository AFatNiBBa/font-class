
import { Icon } from "../../index";

/**
 * A component that renders the `square-code` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-code?s=sharp-regular square-code}
 * @preview ![square-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-code.svg)
 */
const SquareCode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM185 209l-47 47 47 47 17 17L168 353.9l-17-17L87 273l-17-17 17-17 64-64 17-17L201.9 192l-17 17zM297 175l64 64 17 17-17 17-64 64-17 17L246.1 320l17-17 47-47-47-47-17-17L280 158.1l17 17z" />
    </Icon>
);

export default SquareCode;