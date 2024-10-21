
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=solid ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 48C32 21.5 53.5 0 80 0L368 0c26.5 0 48 21.5 48 48l0 392.4-64-128L352 64 96 64l0 248.4-64 128L32 48zM404.4 488.8c.8 1.5 1.2 3 1.5 4.6c1.5 9.3-5.6 18.6-15.8 18.6L368 512 80 512l-22.1 0c-10.2 0-17.4-9.2-15.8-18.6c.3-1.5 .7-3.1 1.5-4.6L96 384l32-64 192 0 32 64 52.4 104.8z" />
    </Icon>
);

export default RampLoading;