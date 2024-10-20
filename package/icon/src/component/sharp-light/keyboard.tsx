
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard?s=sharp-light keyboard}
 * @preview ![keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/keyboard.svg)
 */
const Keyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 96l0 320 512 0 0-320L32 96zM0 64l32 0 512 0 32 0 0 32 0 320 0 32-32 0L32 448 0 448l0-32L0 96 0 64zm120 72l0 48-48 0 0-48 48 0zM72 232l48 0 0 48-48 0 0-48zm48 96l0 48-48 0 0-48 48 0zm48-192l48 0 0 48-48 0 0-48zm48 96l0 48-48 0 0-48 48 0zm48-96l48 0 0 48-48 0 0-48zm48 96l0 48-48 0 0-48 48 0zm48-96l48 0 0 48-48 0 0-48zm48 96l0 48-48 0 0-48 48 0zm48-96l48 0 0 48-48 0 0-48zm48 96l0 48-48 0 0-48 48 0zm-48 96l48 0 0 48-48 0 0-48zm-56 8l16 0 0 32-16 0-224 0-16 0 0-32 16 0 224 0z" />
    </Icon>
);

export default Keyboard;