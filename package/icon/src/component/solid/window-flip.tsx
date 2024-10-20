
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=solid window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm416 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default WindowFlip;