
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=sharp-light yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M-3.2 32l128 192L48 224l-16 0 0 32 16 0 96 0 0 64-96 0-16 0 0 32 16 0 96 0 0 112 0 16 32 0 0-16 0-112 96 0 16 0 0-32-16 0-96 0 0-64 96 0 16 0 0-32-16 0-76.8 0 128-192-38.5 0L160 219.2 35.2 32-3.2 32z" />
    </Icon>
);

export default YenSign;