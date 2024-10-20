
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=sharp-regular tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l384 0 0 48L0 80 0 32zM216 160l168 0 0 48-168 0 0 272-48 0 0-272L0 208l0-48 168 0 48 0z" />
    </Icon>
);

export default TengeSign;