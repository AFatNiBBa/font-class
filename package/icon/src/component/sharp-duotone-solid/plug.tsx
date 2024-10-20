
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=sharp-duotone-solid plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 128 64 0 0-128 0-32L64 0zM256 0l0 32 0 128 64 0 0-128 0-32L256 0z" />
        <path d="M0 160l32 0 320 0 32 0 0 64-32 0 0 32c0 77.4-55 142-128 156.8l0 99.2-64 0 0-99.2C87 398 32 333.4 32 256l0-32L0 224l0-64z" />
    </Icon>
);

export default Plug;