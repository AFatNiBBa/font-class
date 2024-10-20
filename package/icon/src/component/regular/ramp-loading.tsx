
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=regular ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 48l256 0c8.8 0 16 7.2 16 16l0 248.4 48 88L416 64c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 336.4 48-88L80 64c0-8.8 7.2-16 16-16zm67 240c-20.5 0-39.3 11.2-49.2 29.2l-74 135.7C25.3 479.5 44.6 512 75 512L373 512c30.4 0 49.7-32.5 35.1-59.2l-74-135.7c-9.8-18-28.7-29.2-49.2-29.2l-122 0zm-7 52.2c1.4-2.6 4.1-4.2 7-4.2l122 0c2.9 0 5.6 1.6 7 4.2L359.6 464 88.4 464 156 340.2z" />
    </Icon>
);

export default RampLoading;