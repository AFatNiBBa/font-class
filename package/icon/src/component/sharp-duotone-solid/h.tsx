
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=sharp-duotone-solid h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M320 256l0 192 0 32 64 0 0-32 0-192 0-32 0-32 0-128 0-32-64 0 0 32 0 128L64 192 64 64l0-32L0 32 0 64 0 192l0 64L0 448l0 32 64 0 0-32 0-192 256 0z" />
    </Icon>
);

export default H;