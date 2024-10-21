
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=sharp-duotone-solid up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 256l128 0 0 224-128 0 0-224z" />
        <path d="M0 224L192 32 384 224l0 32-128 0-128 0L0 256l0-32z" />
    </Icon>
);

export default Up;