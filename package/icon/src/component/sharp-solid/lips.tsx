
import { Icon } from "../../index";

/**
 * A component that renders the `lips` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=sharp-solid lips}
 * @preview ![lips](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lips.svg)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 224L192 64l96 48 96-48L576 224s-80 224-240 224l-96 0C80 448 0 224 0 224zm64 0s80 96 224 96s224-96 224-96L368 192s-48.1 16-80 16s-80-16-80-16L64 224z" />
    </Icon>
);

export default Lips;