
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=duotone arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 306.7L297.4 105.4c6.2-6.2 14.4-9.4 22.6-9.4s16.4 3.1 22.6 9.4s9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6L141.3 352 96 352l0-45.3z" />
        <path d="M32 384c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 352l0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224z" />
    </Icon>
);

export default ArrowDownLeft;