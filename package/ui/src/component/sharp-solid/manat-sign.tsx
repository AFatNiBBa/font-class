
import { Icon } from "../../index";

/**
 * A component that renders the `manat-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manat-sign?s=sharp-solid manat-sign}
 * @preview ![manat-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/manat-sign.svg)
 */
const ManatSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32l-64 0 0 66.7C69.2 113.9 0 192.9 0 288L0 448l0 32 64 0 0-32 0-160c0-59.6 40.8-109.8 96-124l0 316 64 0 0-316c55.2 14.2 96 64.3 96 124l0 160 0 32 64 0 0-32 0-160c0-95.1-69.2-174.1-160-189.3L224 32z" />
    </Icon>
);

export default ManatSign;