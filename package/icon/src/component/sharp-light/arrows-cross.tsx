
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=sharp-light arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32l-16 0 0 32 16 0 105.4 0L12.7 444.7 1.4 456 24 478.6l11.3-11.3L416 86.6 416 192l0 16 32 0 0-16 0-144 0-16-16 0L288 32zM35.3 44.7L24 33.4 1.4 56 12.7 67.3 173.1 227.7l22.6-22.6L35.3 44.7zm217 262.2L393.4 448 288 448l-16 0 0 32 16 0 144 0 16 0 0-16 0-144 0-16-32 0 0 16 0 105.4L274.9 284.3l-22.6 22.6z" />
    </Icon>
);

export default ArrowsCross;