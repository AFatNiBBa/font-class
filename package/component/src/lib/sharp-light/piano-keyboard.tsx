
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=sharp-light piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 224l0 192-96 0 0-80 16 0 16 0 0-16 0-96 64 0zM416 416l-112 0 0-80 16 0 16 0 0-16 0-96 48 0 0 96 0 16 16 0 16 0 0 80zm-144 0l-112 0 0-80 16 0 16 0 0-16 0-96 48 0 0 96 0 16 16 0 16 0 0 80zM144 448l144 0 144 0 112 0 32 0 0-32 0-192 0-16 0-16 0-96 0-32-32 0L32 64 0 64 0 96l0 96 0 16 0 16L0 416l0 32 32 0 112 0zm-16-32l-96 0 0-192 64 0 0 96 0 16 16 0 16 0 0 80zm16-112l-16 0 0-80 32 0 0 80-16 0zm144 0l-16 0 0-80 32 0 0 80-16 0zm144 0l-16 0 0-80 32 0 0 80-16 0zM544 192l-80 0-64 0-80 0-64 0-80 0-64 0-80 0 0-96 512 0 0 96z" />
    </Icon>
);

export default PianoKeyboard;