
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-light window}
 * @preview ![window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/window.svg)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 384 448 0 0-384L32 64zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm120 72l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm144 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Window;