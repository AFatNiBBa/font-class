
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=duotone grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 64 32 0 0 128 64 0 0-128 32 0 0 128 64 0 0-128 32 0 0 128 64 0 0-128 32 0 0-64-32 0 0-128-64 0 0 128-32 0 0-128-64 0 0 128-32 0 0-128L96 96l0 128-32 0z" />
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 320 320 0 0-320L64 96z" />
    </Icon>
);

export default Grate;