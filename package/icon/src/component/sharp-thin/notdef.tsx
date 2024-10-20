
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=sharp-thin notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L8 0 376 0l8 0 0 8 0 496 0 8-8 0L8 512l-8 0 0-8L0 8 0 0zM16 482.5L182.1 256 16 29.5l0 452.9zM25.9 496l332.2 0L192 269.5 25.9 496zm176-240L368 482.5l0-452.9L201.9 256zM358.1 16L25.9 16 192 242.5 358.1 16z" />
    </Icon>
);

export default Notdef;