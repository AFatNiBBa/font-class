
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=sharp-duotone-solid seal}
 * @preview ![seal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/seal.svg)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M331 75L256 0 181 75 75 75l0 106L0 256l75 75 0 106 106 0 75 75 75-75 106 0 0-106 75-75-75-75 0-106L331 75z" />
    </Icon>
);

export default Seal;