
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=regular yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M43.8 42.5c-7.5-11-22.4-13.8-33.3-6.4S-3.3 58.5 4.2 69.5L109.2 224 40 224c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0 0 48-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-48 96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-69.2 0L315.8 69.5c7.5-11 4.6-25.9-6.4-33.3s-25.9-4.6-33.3 6.4L160 213.3 43.8 42.5z" />
    </Icon>
);

export default YenSign;