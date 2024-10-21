
import { Icon } from "../../index";

/**
 * A component that renders the `square-pied-piper` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pied-piper?s=brands square-pied-piper}
 * @preview ![square-pied-piper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/square-pied-piper.svg)
 */
const SquarePiedPiper: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 419L0 479.2l.8-328C.8 85.3 54 32 120 32h327.2c-93 28.9-189.9 94.2-253.9 168.6C122.7 282 82.6 338 32 419M448 32S305.2 98.8 261.6 199.1c-23.2 53.6-28.9 118.1-71 158.6-28.9 27.8-69.8 38.2-105.3 56.3-23.2 12-66.4 40.5-84.9 66h328.4c66 0 119.3-53.3 119.3-119.2-.1 0-.1-328.8-.1-328.8z" />
    </Icon>
);

export default SquarePiedPiper;