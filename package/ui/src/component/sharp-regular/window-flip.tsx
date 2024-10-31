
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-regular window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 160l0 48 0 16L0 432l0 48 48 0 416 0 48 0 0-48 0-208 0-16 0-48 0-128zM48 224l416 0 0 208L48 432l0-208zM384 96l64 0 0 64-64 0 0-64zm-32 0l0 64-64 0 0-64 64 0zM192 96l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default WindowFlip;