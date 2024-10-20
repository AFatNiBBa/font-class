
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-solid window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM384 96l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64zM192 96l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default WindowFlip;