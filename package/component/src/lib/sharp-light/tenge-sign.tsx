
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=sharp-light tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l384 0 0 32L0 64 0 32zM208 160l176 0 0 32-176 0 0 288-32 0 0-288L0 192l0-32 176 0 32 0z" />
    </Icon>
);

export default TengeSign;