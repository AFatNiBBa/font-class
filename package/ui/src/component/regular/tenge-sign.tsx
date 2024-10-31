
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=regular tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l336 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 80C10.7 80 0 69.3 0 56zM0 184c0-13.3 10.7-24 24-24l168 0 168 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0 0 248c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-248L24 208c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default TengeSign;