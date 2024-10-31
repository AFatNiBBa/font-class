
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=sharp-light grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM80 96l72 0 72 0 72 0 72 0 16 0 0 16 0 144 0 144 0 16-16 0-72 0-72 0-72 0-72 0-16 0 0-16 0-144 0-144 0-16 16 0zM96 240l40 0 0-112-40 0 0 112zm72 0l40 0 0-112-40 0 0 112zm72 0l40 0 0-112-40 0 0 112zm72 0l40 0 0-112-40 0 0 112zm0 32l0 112 40 0 0-112-40 0zm-32 0l-40 0 0 112 40 0 0-112zm-72 0l-40 0 0 112 40 0 0-112zm-72 0l-40 0 0 112 40 0 0-112z" />
    </Icon>
);

export default Grate;