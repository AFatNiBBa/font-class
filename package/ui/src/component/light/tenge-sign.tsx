
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=light tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 64C7.2 64 0 56.8 0 48zM0 176c0-8.8 7.2-16 16-16l176 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0 0 272c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-272L16 192c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default TengeSign;