
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=sharp-thin grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM72 96l80 0 72 0 72 0 80 0 8 0 0 8 0 152 0 152 0 8-8 0-80 0-72 0-72 0-80 0-8 0 0-8 0-152 0-152 0-8 8 0zm8 152l64 0 0-136-64 0 0 136zm80 0l56 0 0-136-56 0 0 136zm72 0l56 0 0-136-56 0 0 136zm72 0l64 0 0-136-64 0 0 136zm0 16l0 136 64 0 0-136-64 0zm-16 0l-56 0 0 136 56 0 0-136zm-72 0l-56 0 0 136 56 0 0-136zm-72 0l-64 0 0 136 64 0 0-136z" />
    </Icon>
);

export default Grate;