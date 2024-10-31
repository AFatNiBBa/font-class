
import { Icon } from "../../index";

/**
 * A component that renders the `star-half` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=sharp-thin star-half}
 * @preview ![star-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star-half.svg)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M148.1 328.5L124.4 493.4 121.7 512l17.2-7.4 173.1-74.4 0-401.6 0-28.6-16 23.7L201.6 164 38 192.3l-19.1 3.3 13.5 13.9 115.7 119zM51.5 206.2l152.8-26.4 6.7-1.2 3.8-5.7L296.1 52.4l0 367.3L141.6 486l22.3-155.3L165 323l-5.5-5.6L51.5 206.2z" />
    </Icon>
);

export default StarHalf;