
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-light window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 384L32 448 32 64l448 0zm32-32l-32 0L32 32 0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32zM392 104l0 48 48 0 0-48-48 0zm-48 0l-48 0 0 48 48 0 0-48zm-144 0l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default WindowFlip;