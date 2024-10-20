
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=sharp-regular place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 .1l17.5 18.7 72 76.8 6.5 6.9 0 9.5 0 73.5 53 34.3 11 7.1 0 13.1 0 224 112 0 0-106.9-80-51.8 0-57.2 117 75.7 11 7.1 0 13.1 0 144 0 24-24 0-232 0s0 0 0 0l-160 0s0 0 0 0L24 512 0 512l0-24L0 344l0-13.1 11-7.1 117-75.7 0 57.2L48 357.1 48 464l112 0 0-224 0-13.1 11-7.1 53-34.3 0-73.5 0-9.5 6.5-6.9 72-76.8L320 .1zM272 121.5l0 77.1 0 13.1-11 7.1-53 34.3L208 464l64 0 0-96c0-26.5 21.5-48 48-48s48 21.5 48 48l0 96 64 0 0-210.9-53-34.3-11-7.1 0-13.1 0-77.1L320 70.3l-48 51.2z" />
    </Icon>
);

export default PlaceOfWorship;