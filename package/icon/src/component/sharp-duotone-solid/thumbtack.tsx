
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=sharp-duotone-solid thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32 160 0 0-128 64 0 0 128 160 0 0-32c0-22.5-23.7-76.5-82.1-106.7L290.5 64 320 64l32 0 0-64L320 0 64 0 32 0l0 64 32 0 29.5 0L82.1 212.1C23.7 240.7 0 293 0 320z" />
        <path d="M160 480l0-256 64 0 0 256 0 32-64 0 0-32z" />
    </Icon>
);

export default Thumbtack;