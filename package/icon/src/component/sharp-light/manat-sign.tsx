
import { Icon } from "../../index";

/**
 * A component that renders the `manat-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manat-sign?s=sharp-light manat-sign}
 * @preview ![manat-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/manat-sign.svg)
 */
const ManatSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 32l-32 0 0 64.7C77.4 104.8 0 187.3 0 288L0 464l0 16 32 0 0-16 0-176c0-83 63.1-151.2 144-159.2L176 480l32 0 0-351.2c80.9 8 144 76.2 144 159.2l0 176 0 16 32 0 0-16 0-176c0-100.7-77.4-183.2-176-191.3L208 32z" />
    </Icon>
);

export default ManatSign;