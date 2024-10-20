
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=sharp-thin tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l384 0 0 16L0 48 0 32zM200 160l184 0 0 16-184 0 0 304-16 0 0-304L0 176l0-16 184 0 16 0z" />
    </Icon>
);

export default TengeSign;