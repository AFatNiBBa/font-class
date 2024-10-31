
import { Icon } from "../../index";

/**
 * A component that renders the `square-i` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-i?s=sharp-solid square-i}
 * @preview ![square-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-i.svg)
 */
const SquareI: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM152 128l72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareI;