
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=sharp-duotone-solid ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 0L64 0 384 0l32 0 0 32 0 408.4-64-128L352 64 96 64l0 248.4-64 128L32 32 32 0z" />
        <path d="M128 320H320l96 192H32l96-192z" />
    </Icon>
);

export default RampLoading;