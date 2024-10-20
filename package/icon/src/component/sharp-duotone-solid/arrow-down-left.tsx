
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=sharp-duotone-solid arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 306.7L297.4 105.4 320 82.7 365.3 128l-22.6 22.6L141.3 352 96 352l0-45.3z" />
        <path d="M32 416l32 0 224 0 32 0 0-64-32 0L96 352l0-192 0-32-64 0 0 32 0 224 0 32z" />
    </Icon>
);

export default ArrowDownLeft;