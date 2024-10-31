
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keyboard-brightness` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-brightness?s=sharp-duotone-solid keyboard-brightness}
 * @preview ![keyboard-brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/keyboard-brightness.svg)
 */
const KeyboardBrightness: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64 32 0 64 0 32 0 0-64-32 0-64 0L0 352zM66.7 176l22.6 22.6 64 64L176 285.3 221.3 240l-22.6-22.6-64-64L112 130.7 66.7 176zM288 64l0 32 0 96 0 32 64 0 0-32 0-96 0-32-64 0zM418.7 240L464 285.3l22.6-22.6 64-64L573.3 176 528 130.7l-22.6 22.6-64 64L418.7 240zM512 352l0 64 32 0 64 0 32 0 0-64-32 0-64 0-32 0z" />
        <path d="M192 352l32 0 192 0 32 0 0 64-32 0-192 0-32 0 0-64z" />
    </Icon>
);

export default KeyboardBrightness;