
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane?s=sharp-duotone-solid plane}
 * @preview ![plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane.svg)
 */
const Plane: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 0l54.9 192 150.9 0L256 0 160 0zm0 512l96 0L365.7 320l-150.9 0L160 512z" />
        <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L112 320 64 384 0 384 32 256 0 128l64 0 48 64 370.3 0z" />
    </Icon>
);

export default Plane;