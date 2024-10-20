
import { Icon } from "../../index";

/**
 * A component that renders the `chf-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chf-sign?s=sharp-light chf-sign}
 * @preview ![chf-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chf-sign.svg)
 */
const ChfSign: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-32 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 32 0 0-16c0-44.2-35.8-80-80-80zM224 48l0-16-32 0 0 16 0 416 0 16 32 0 0-16 0-208 160 0 0 208 0 16 32 0 0-16 0-416 0-16-32 0 0 16 0 176-160 0 0-176zM464 32l-16 0 0 16 0 416 0 16 32 0 0-16 0-208 112 0 16 0 0-32-16 0-112 0 0-160 144 0 16 0 0-32-16 0L464 32z" />
    </Icon>
);

export default ChfSign;