
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=sharp-regular keyboard-down}
 * @preview ![keyboard-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/keyboard-down.svg)
 */
const KeyboardDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l0 208 480 0 0-208L48 48zM0 0L48 0 528 0l48 0 0 48 0 208 0 48-48 0L48 304 0 304l0-48L0 48 0 0zM209 359l79 79 79-79 17-17L417.9 376l-17 17-96 96-17 17-17-17-96-96-17-17L192 342.1l17 17zM160 176l256 0 0 48-256 0 0-48zm-8-88l0 48-48 0 0-48 48 0zm32 0l48 0 0 48-48 0 0-48zm128 0l0 48-48 0 0-48 48 0zm32 0l48 0 0 48-48 0 0-48zm128 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default KeyboardDown;