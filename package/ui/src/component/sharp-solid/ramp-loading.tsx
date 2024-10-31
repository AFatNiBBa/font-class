
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=sharp-solid ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 0L64 0 384 0l32 0 0 32 0 408.4-64-128L352 64 96 64l0 248.4-64 128L32 32 32 0zM352 384l52.4 104.8L416 512l-25.9 0-6.1 0L64 512l-6.1 0L32 512l11.6-23.2L96 384l32-64 192 0 32 64z" />
    </Icon>
);

export default RampLoading;