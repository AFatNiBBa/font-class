
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keyboard-brightness-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-brightness-low?s=duotone keyboard-brightness-low}
 * @preview ![keyboard-brightness-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/keyboard-brightness-low.svg)
 */
const KeyboardBrightnessLow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm160-64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm160 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M192 384c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default KeyboardBrightnessLow;