
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=sharp-solid keyboard-down}
 * @preview ![keyboard-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/keyboard-down.svg)
 */
const KeyboardDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L0 0 0 288l576 0L576 0zM128 64l0 64-64 0 0-64 64 0zM64 160l64 0 0 64-64 0 0-64zm352 0l0 64-256 0 0-64 256 0zm32 0l64 0 0 64-64 0 0-64zM224 64l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zM160 352l0 32L288 512 416 384l0-32-256 0z" />
    </Icon>
);

export default KeyboardDown;