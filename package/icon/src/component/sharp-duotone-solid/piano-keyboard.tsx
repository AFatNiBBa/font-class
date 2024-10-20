
import { Icon, generic } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=sharp-duotone-solid piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0 0 160 80 0 0-64 32 0 0 64 96 0 0-64 32 0 0 64 96 0 0-64 32 0 0 64 80 0 0-160 64 0 0 192 0 32-32 0L32 448 0 448l0-32L0 224z" />
        <path d="M576 64L0 64 0 224l128 0 0 64 0 32 64 0 0-32 0-64 64 0 0 64 0 32 64 0 0-32 0-64 64 0 0 64 0 32 64 0 0-32 0-64 128 0 0-160z" />
    </Icon>
);

export default PianoKeyboard;