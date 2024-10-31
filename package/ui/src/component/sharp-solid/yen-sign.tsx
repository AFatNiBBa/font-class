
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=sharp-solid yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M.7 32L106 224l-58 0-32 0 0 64 32 0 80 0 0 32-80 0-32 0 0 64 32 0 80 0 0 64 0 32 64 0 0-32 0-64 80 0 32 0 0-64-32 0-80 0 0-32 80 0 32 0 0-64-32 0-58 0L319.3 32l-73 0L160 189.4 73.7 32 .7 32z" />
    </Icon>
);

export default YenSign;