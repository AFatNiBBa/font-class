
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=sharp-regular yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M2.2 32L113.7 224 40 224l-24 0 0 48 24 0 96 0 0 48-96 0-24 0 0 48 24 0 96 0 0 88 0 24 48 0 0-24 0-88 96 0 24 0 0-48-24 0-96 0 0-48 96 0 24 0 0-48-24 0-73.7 0L317.8 32l-55.5 0L160 208.2 57.7 32 2.2 32z" />
    </Icon>
);

export default YenSign;