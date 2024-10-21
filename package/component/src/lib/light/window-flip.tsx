
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=light window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l384 0zm64 32c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320zm-96 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM296 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default WindowFlip;