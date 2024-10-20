
import { Icon } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=sharp-solid square-exclamation}
 * @preview ![square-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-exclamation.svg)
 */
const SquareExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM248 128l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM200 320l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default SquareExclamation;