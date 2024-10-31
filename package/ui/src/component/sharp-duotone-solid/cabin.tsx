
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cabin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=sharp-duotone-solid cabin}
 * @preview ![cabin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cabin.svg)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256l160 0 0 64L32 320l0-64zm0 96l160 0 0 64L32 416l0-64zm0 96l160 0 0 64L32 512l0-64zM320 256l160 0 0 64-160 0 0-64zm0 96l160 0 0 64-160 0 0-64zm0 96l160 0 0 64-160 0 0-64z" />
        <path d="M0 176l0 48 384 0 96 0 32 0 0-48-32-22 0-122-96 0 0 56L256 0 0 176zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Cabin;