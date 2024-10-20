
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-e` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=sharp-duotone-solid square-e}
 * @preview ![square-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-e.svg)
 */
const SquareE: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 144 0 24 0 0 48-24 0-120 0 0 56 88 0 24 0 0 48-24 0-88 0 0 56 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-104 0-104 0-24z" />
        <path d="M128 128l24 0 144 0 24 0 0 48-24 0-120 0 0 56 88 0 24 0 0 48-24 0-88 0 0 56 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-104 0-104 0-24z" />
    </Icon>
);

export default SquareE;