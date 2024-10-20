
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-i` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-i?s=sharp-duotone-solid square-i}
 * @preview ![square-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-i.svg)
 */
const SquareI: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48z" />
        <path d="M128 128l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48z" />
    </Icon>
);

export default SquareI;