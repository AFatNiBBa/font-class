
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brightness-low` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness-low?s=sharp-duotone-solid brightness-low}
 * @preview ![brightness-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brightness-low.svg)
 */
const BrightnessLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 224l0 64 64 0 0-64-64 0zm34.7-96L128 173.3 173.3 128 128 82.7 82.7 128zm0 256L128 429.3 173.3 384 128 338.7 82.7 384zM224 48l0 64 64 0 0-64-64 0zm0 352l0 64 64 0 0-64-64 0zM338.7 128L384 173.3 429.3 128 384 82.7 338.7 128zm0 256L384 429.3 429.3 384 384 338.7 338.7 384zM400 224l0 64 64 0 0-64-64 0z" />
        <path d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default BrightnessLow;