
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=sharp-duotone-solid arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M18.7 128l22.6 22.6L242.7 352l45.3 0 0-45.3L86.6 105.4 64 82.7 18.7 128z" />
        <path d="M352 416l-32 0L96 416l-32 0 0-64 32 0 192 0 0-192 0-32 64 0 0 32 0 224 0 32z" />
    </Icon>
);

export default ArrowDownRight;