
import { Icon } from "../../index";

/**
 * A component that renders the `square-h` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=sharp-solid square-h}
 * @preview ![square-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-h.svg)
 */
const SquareH: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM336 152l0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24 48 0 0 24 0 80 128 0 0-80 0-24 48 0 0 24z" />
    </Icon>
);

export default SquareH;