
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=regular mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M91.4 162.3C61 188.5 48 225.2 48 272c0 43.9 15.3 74.8 36.8 95c22 20.6 53.7 33 91.2 33l8.4 0c6.1 0 11.6-3.4 14.3-8.8l23.2-46.3 39 19.5-39-19.5C234.4 319.8 260 304 288 304s53.6 15.8 66.1 40.8l23.2 46.3c2.7 5.4 8.2 8.8 14.3 8.8l8.4 0c37.4 0 69.2-12.4 91.2-33c21.5-20.2 36.8-51.1 36.8-95c0-46.8-13-83.5-43.4-109.7C452.9 134.9 394.3 112 288 112s-164.9 22.9-196.6 50.3zM0 272C0 160 64 64 288 64s288 96 288 208s-80 176-176 176l-8.4 0c-24.2 0-46.4-13.7-57.2-35.4l-23.2-46.3c-4.4-8.8-13.3-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-23.2 46.3c-10.8 21.7-33 35.4-57.2 35.4l-8.4 0C80 448 0 384 0 272zm96-16a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Mask;