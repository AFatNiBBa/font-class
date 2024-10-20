
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=sharp-solid laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0L64 0l0 32 0 256L0 288l0 48 48 48 304 0 0-96-224 0 0-224 320 0 0 32 64 0 0-64 0-32L480 0 96 0zM448 448l0-256 128 0 0 256-128 0zM384 128l0 64 0 256 0 64 64 0 128 0 64 0 0-64 0-256 0-64-64 0-128 0-64 0z" />
    </Icon>
);

export default LaptopMobile;