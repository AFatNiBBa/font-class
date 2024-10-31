
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard?s=sharp-regular keyboard}
 * @preview ![keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/keyboard.svg)
 */
const Keyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 480 0 0-288L48 112zM0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zM416 320l0 48-256 0 0-48 256 0zM104 232l48 0 0 48-48 0 0-48zm48-80l0 48-48 0 0-48 48 0zm32 80l48 0 0 48-48 0 0-48zm48-80l0 48-48 0 0-48 48 0zm32 80l48 0 0 48-48 0 0-48zm48-80l0 48-48 0 0-48 48 0zm32 80l48 0 0 48-48 0 0-48zm48-80l0 48-48 0 0-48 48 0zm32 80l48 0 0 48-48 0 0-48zm48-80l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Keyboard;