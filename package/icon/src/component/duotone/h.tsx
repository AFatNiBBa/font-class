
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=duotone h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z" />
    </Icon>
);

export default H;