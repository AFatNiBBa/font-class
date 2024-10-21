
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keyboard-brightness-low` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-brightness-low?s=sharp-duotone-solid keyboard-brightness-low}
 * @preview ![keyboard-brightness-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/keyboard-brightness-low.svg)
 */
const KeyboardBrightnessLow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 352l0 64 64 0 0-64-64 0zm50.7-128L160 269.3 205.3 224 160 178.7 114.7 224zM288 128l0 64 64 0 0-64-64 0zm146.7 96L480 269.3 525.3 224 480 178.7 434.7 224zM512 352l0 64 64 0 0-64-64 0z" />
        <path d="M192 352l32 0 192 0 32 0 0 64-32 0-192 0-32 0 0-64z" />
    </Icon>
);

export default KeyboardBrightnessLow;