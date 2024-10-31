
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-regular up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M200 224l0-48 8 0 40 0 8 0 0-48L161.9 33.9 128 0 94.1 33.9 0 128l0 48 8 0 40 0 8 0 0 48 0 64 0 48-8 0L8 336l-8 0 0 48 94.1 94.1L128 512l33.9-33.9L256 384l0-48-8 0-40 0-8 0 0-48 0-64zM188.1 384L128 444.1 67.9 384l36.1 0 0-48 0-160 0-48-36.1 0L128 67.9 188.1 128 152 128l0 48 0 160 0 48 36.1 0z" />
    </Icon>
);

export default UpDown;