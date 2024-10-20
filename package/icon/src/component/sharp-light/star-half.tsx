
import { Icon } from "../../index";

/**
 * A component that renders the `star-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=sharp-light star-half}
 * @preview ![star-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/star-half.svg)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M148.1 328.5L127 474.9 121.7 512l34.5-14.8 155.9-67 0-372.9 0-57.3-32 47.5L201.6 164 57.1 189l-38.2 6.6 27 27.8L148.1 328.5zm-64-111.7L207 195.5l13.5-2.3 7.6-11.3 52-77.1 0 304.4L161.5 460.1l18.3-127 2.2-15.6-11-11.3L84.1 216.8z" />
    </Icon>
);

export default StarHalf;