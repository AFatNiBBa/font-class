
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=sharp-duotone-solid tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 64 160 0 0 256 64 0 0-256 160 0 0-64-160 0-64 0L0 160z" />
        <path d="M0 32H384V96H0V32z" />
    </Icon>
);

export default TengeSign;