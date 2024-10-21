
import { Icon } from "../../index";

/**
 * A component that renders the `cent-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=sharp-regular cent-sign}
 * @preview ![cent-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cent-sign.svg)
 */
const CentSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 0l0 24 0 48.5C277.9 75 313 88 341.9 108.4l-27.7 39.2C289.7 130.3 259.2 120 226 120c-82 0-146 62.2-146 136s64 136 146 136c33.3 0 63.7-10.3 88.2-27.6l27.7 39.2C313 424 277.9 437 240 439.5l0 48.5 0 24-48 0 0-24 0-50.8C102 422 32 347.7 32 256s70-166 160-181.2L192 24l0-24 48 0z" />
    </Icon>
);

export default CentSign;