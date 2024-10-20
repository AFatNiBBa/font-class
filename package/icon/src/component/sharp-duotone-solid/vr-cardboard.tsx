
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=sharp-duotone-solid vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l224 0 64-128 64 0 64 128 224 0 0-384L0 64zM224 240A64 64 0 1 1 96 240a64 64 0 1 1 128 0zm320 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M160 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm320 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default VrCardboard;