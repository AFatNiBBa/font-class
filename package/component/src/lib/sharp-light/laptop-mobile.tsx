
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=sharp-light laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32l384 0 0 64 32 0 0-64 0-32L480 0 96 0 64 0l0 32 0 256-32 0L0 288l0 32 0 16 48 48 304 0 0-32L61.3 352 32 322.7l0-2.7 32 0 32 0 256 0 0-32L96 288 96 32zM384 512l32 0 192 0 32 0 0-32 0-320 0-32-32 0-192 0-32 0 0 32 0 320 0 32zm224-32l-192 0 0-320 192 0 0 320z" />
    </Icon>
);

export default LaptopMobile;