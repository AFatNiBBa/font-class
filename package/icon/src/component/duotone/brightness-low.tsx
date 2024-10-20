
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brightness-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness-low?s=duotone brightness-low}
 * @preview ![brightness-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/brightness-low.svg)
 */
const BrightnessLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 80a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 352a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM416 128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default BrightnessLow;