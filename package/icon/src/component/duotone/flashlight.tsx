
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=duotone flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208l0 96c0 26.5 21.5 48 48 48l336 0s80 64 192 64l0-320c-112 0-192 64-192 64L48 160c-26.5 0-48 21.5-48 48zm224 48c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" />
        <path d="M608 96l-32 0 0 320 32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
    </Icon>
);

export default Flashlight;