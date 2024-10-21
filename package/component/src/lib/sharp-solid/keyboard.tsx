
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard?s=sharp-solid keyboard}
 * @preview ![keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/keyboard.svg)
 */
const Keyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zM128 128l0 64-64 0 0-64 64 0zM64 224l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zm32-192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zm-64 96l256 0 0 64-256 0 0-64zM320 128l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Keyboard;