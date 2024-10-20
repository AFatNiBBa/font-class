
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=sharp-thin piano-keyboard}
 * @preview ![piano-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/piano-keyboard.svg)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 224l-96 0 0 104 0 8-8 0-24 0 0 96 128 0 0-208zM416 432l0-96-24 0-8 0 0-8 0-104-56 0 0 104 0 8-8 0-24 0 0 96 120 0zm-136 0l0-96-24 0-8 0 0-8 0-104-56 0 0 104 0 8-8 0-24 0 0 96 120 0zm-136 0l0-96-24 0-8 0 0-8 0-104-96 0 0 208 128 0zm0-112l16 0 16 0 0-96-48 0 0 96 16 0zm136 0l16 0 16 0 0-96-48 0 0 96 16 0zm136 0l16 0 16 0 0-96-48 0 0 96 16 0zM560 208l0-128L16 80l0 128 104 0 64 0 72 0 64 0 72 0 64 0 104 0zm16 0l0 8 0 8 0 208 0 16-16 0L16 448 0 448l0-16L0 224l0-8 0-8L0 80 0 64l16 0 544 0 16 0 0 16 0 128z" />
    </Icon>
);

export default PianoKeyboard;