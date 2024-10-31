
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-up?s=sharp-duotone-solid plane-up}
 * @preview ![plane-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-up.svg)
 */
const PlaneUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 96 192-64 0-160L0 288zM320 160l0 160 192 64 0-96L320 160z" />
        <path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7L320 400l64 48 0 64L256 480 128 512l0-64 64-48 0-306.3z" />
    </Icon>
);

export default PlaneUp;