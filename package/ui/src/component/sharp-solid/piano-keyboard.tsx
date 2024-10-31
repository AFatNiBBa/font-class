
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=sharp-solid piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zM512 224l0 160-80 0 0-64 16 0 0-32 0-64 64 0zM400 384l-96 0 0-64 16 0 0-32 0-64 64 0 0 64 0 32 16 0 0 64zm-128 0l-96 0 0-64 16 0 0-32 0-64 64 0 0 64 0 32 16 0 0 64zm-128 0l-80 0 0-160 64 0 0 64 0 32 16 0 0 64z" />
    </Icon>
);

export default PianoKeyboard;