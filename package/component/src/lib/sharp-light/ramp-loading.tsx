
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=sharp-light ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32l320 0 0 309.7 32 58.7 0-16.4 0-352 0-32L384 0 64 0 32 0l0 32 0 352 0 16.4 32-58.7L64 32zm80 256l-9.5 0-4.5 8.4-104 192L13.1 512 40 512l368 0 26.9 0-12.8-23.6-104-192-4.5-8.4-9.5 0-160 0zM66.9 480l86.7-160 140.9 0 86.7 160L66.9 480z" />
    </Icon>
);

export default RampLoading;