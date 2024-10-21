
import { Icon } from "../../index";

/**
 * A component that renders the `chf-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chf-sign?s=sharp-thin chf-sign}
 * @preview ![chf-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chf-sign.svg)
 */
const ChfSign: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80s80-35.8 80-80l-16 0c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-288c0-35.3 28.7-64 64-64s64 28.7 64 64l16 0c0-44.2-35.8-80-80-80zm144 8l0-8-16 0 0 8 0 200 0 16 0 216 0 8 16 0 0-8 0-216 160 0 0 216 0 8 16 0 0-8 0-216 0-16 0-200 0-8-16 0 0 8 0 200-160 0 0-200zm232-8l-8 0 0 8 0 432 0 8 16 0 0-8 0-216 136 0 8 0 0-16-8 0-136 0 0-192 168 0 8 0 0-16-8 0L456 32z" />
    </Icon>
);

export default ChfSign;