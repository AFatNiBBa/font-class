
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=duotone arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 384c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0L288 205.3l0-45.3-45.3 0L41.4 361.4C35.1 367.6 32 375.8 32 384z" />
        <path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
    </Icon>
);

export default ArrowUpRight;