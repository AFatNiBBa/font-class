
import { Icon } from "../../index";

/**
 * A component that renders the `kip-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kip-sign?s=sharp-thin kip-sign}
 * @preview ![kip-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/kip-sign.svg)
 */
const KipSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32l0 8 0 198.8 234.9-197 6.1-5.1L347.3 49l-6.1 5.1L110 248l266 0 8 0 0 16-8 0-266 0L341.1 457.9l6.1 5.1L337 475.3l-6.1-5.1L96 273.2 96 473l0 8-16 0 0-8 0-209L8 264l-8 0 0-16 8 0 72 0L80 40l0-8 16 0z" />
    </Icon>
);

export default KipSign;