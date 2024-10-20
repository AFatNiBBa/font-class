
import { Icon } from "../../index";

/**
 * A component that renders the `manat-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manat-sign?s=sharp-thin manat-sign}
 * @preview ![manat-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/manat-sign.svg)
 */
const ManatSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M200 32l-16 0 0 64.2C81.7 100.4 0 184.6 0 288L0 472l0 8 16 0 0-8 0-184c0-94.5 74.5-171.6 168-175.8L184 480l16 0 0-367.8c93.5 4.2 168 81.3 168 175.8l0 184 0 8 16 0 0-8 0-184c0-103.4-81.7-187.6-184-191.8L200 32z" />
    </Icon>
);

export default ManatSign;