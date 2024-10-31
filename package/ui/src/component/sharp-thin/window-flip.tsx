
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-thin window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48l0 416L16 464 16 48l480 0zm16-16l-16 0L16 32 0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16zM400 112l0 32 32 0 0-32-32 0zm-64 0l-32 0 0 32 32 0 0-32zm-128 0l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default WindowFlip;