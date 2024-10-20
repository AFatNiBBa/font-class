
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=sharp-regular laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 48l352 0 0 48 48 0 0-48 0-48L464 0 112 0 64 0l0 48 0 272L0 320l0 32 32 32 320 0 0-64-240 0 0-272zM384 512l48 0 160 0 48 0 0-48 0-288 0-48-48 0-160 0-48 0 0 48 0 288 0 48zm208-48l-160 0 0-288 160 0 0 288z" />
    </Icon>
);

export default LaptopMobile;