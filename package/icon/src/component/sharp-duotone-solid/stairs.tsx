
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stairs` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=sharp-duotone-solid stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 352l0 64 64 0 0-64-64 0zM256 224l0 64 64 0 0-64-64 0zM384 96l0 64 64 0 0-64-64 0z" />
        <path d="M416 32l-32 0 0 32 0 32 64 0 96 0 32 0 0-64-32 0L416 32zM384 160l-96 0-32 0 0 32 0 32 64 0 96 0 32 0 0-32 0-32-64 0zM160 288l-32 0 0 32 0 32 64 0 96 0 32 0 0-32 0-32-64 0-96 0zm32 128l-64 0-96 0L0 416l0 64 32 0 128 0 32 0 0-32 0-32z" />
    </Icon>
);

export default Stairs;