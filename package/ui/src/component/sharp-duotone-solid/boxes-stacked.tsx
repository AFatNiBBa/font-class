
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boxes-stacked` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-stacked?s=sharp-duotone-solid boxes-stacked}
 * @preview ![boxes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/boxes-stacked.svg)
 */
const BoxesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M104 256l80 0 0 96-80 0 0-96zM248 0l80 0 0 96-80 0 0-96zM392 256l80 0 0 96-80 0 0-96z" />
        <path d="M248 0L160 0l0 224 256 0L416 0 328 0l0 96-80 0 0-96zM104 256L0 256 0 512l288 0 0-256-104 0 0 96-80 0 0-96zM576 512l0-256-104 0 0 96-80 0 0-96-72 0 0 256 256 0z" />
    </Icon>
);

export default BoxesStacked;