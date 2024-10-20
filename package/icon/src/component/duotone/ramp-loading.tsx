
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=duotone ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 48C32 21.5 53.5 0 80 0L368 0c26.5 0 48 21.5 48 48l0 392.4-64-128L352 64 96 64l0 248.4-64 128L32 48z" />
        <path d="M128 320H320l84.4 168.8c5.3 10.6-2.4 23.2-14.3 23.2H57.9c-11.9 0-19.6-12.5-14.3-23.2L128 320z" />
    </Icon>
);

export default RampLoading;