
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=light ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 32l256 0c17.7 0 32 14.3 32 32l0 277.7 32 58.7L416 64c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 336.4 32-58.7L64 64c0-17.7 14.3-32 32-32zm67.1 256c-17.6 0-33.8 9.6-42.2 25.1L38.7 464.8C27.2 486.1 42.6 512 66.9 512l314.3 0c24.2 0 39.7-25.9 28.1-47.2L327.1 313.1c-8.4-15.5-24.6-25.1-42.2-25.1l-121.9 0zM149 328.4c2.8-5.2 8.2-8.4 14.1-8.4l121.9 0c5.9 0 11.3 3.2 14.1 8.4L381.1 480 66.9 480 149 328.4z" />
    </Icon>
);

export default RampLoading;