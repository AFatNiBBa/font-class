
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-h` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=sharp-duotone-solid square-h}
 * @preview ![square-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-h.svg)
 */
const SquareH: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm112 96l48 0 0 24 0 80 128 0 0-80 0-24 48 0 0 24 0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24z" />
        <path d="M336 128l0 24 0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24 48 0 0 24 0 80 128 0 0-80 0-24 48 0z" />
    </Icon>
);

export default SquareH;