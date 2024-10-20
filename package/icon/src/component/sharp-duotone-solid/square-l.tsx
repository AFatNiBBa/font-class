
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-l` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-l?s=sharp-duotone-solid square-l}
 * @preview ![square-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-l.svg)
 */
const SquareL: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l48 0 0 24 0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24z" />
        <path d="M176 128l0 24 0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24 48 0z" />
    </Icon>
);

export default SquareL;