
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-duotone-solid clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-72 0-24 80 0 0 448L0 512 0 64z" />
        <path d="M304 64l-33.6 0C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L80 64l0 96 112 0 112 0 0-96zM192 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Clipboard;