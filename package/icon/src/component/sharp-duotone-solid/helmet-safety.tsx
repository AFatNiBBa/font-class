
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=sharp-duotone-solid helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384l32 0 512 0 32 0 0 24s-80 72-288 72S0 408 0 408l0-24z" />
        <path d="M224 32l128 0 0 34.3L352 176l64.5-90.2C491.2 121.5 543 197.4 544 285.6l0 98.4L32 384l0-96c0-89.2 52.1-166.2 127.6-202.2L224 176l0-109.7L224 32z" />
    </Icon>
);

export default HelmetSafety;