
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=sharp-thin arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M280 32l-8 0 0 16 8 0 140.7 0L10.3 458.3 4.7 464 16 475.3l5.7-5.7L432 59.3 432 200l0 8 16 0 0-8 0-160 0-8-8 0L280 32zM21.7 42.3L16 36.7 4.7 48l5.7 5.7L190.1 233.4l11.3-11.3L21.7 42.3zM420.7 464L280 464l-8 0 0 16 8 0 160 0 8 0 0-8 0-160 0-8-16 0 0 8 0 140.7L257.9 278.6l-11.3 11.3L420.7 464z" />
    </Icon>
);

export default ArrowsCross;