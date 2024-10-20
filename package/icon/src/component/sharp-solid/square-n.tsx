
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=sharp-solid square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM288 128l48 0 0 24 0 208 0 24-35.1 0-7.2-8.5L160 217.5 160 360l0 24-48 0 0-24 0-208 0-24 35.1 0 7.2 8.5L288 294.5 288 152l0-24z" />
    </Icon>
);

export default SquareN;