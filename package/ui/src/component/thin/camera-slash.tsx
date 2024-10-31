
import { Icon } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=thin camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM576 366.4L576 160c0-35.3-28.7-64-64-64l-76.9 0L424.7 64.8C418.2 45.2 399.8 32 379.2 32L260.8 32c-20.7 0-39 13.2-45.5 32.8l-4.4 13.3 13.4 10.5 6.3-18.8C234.8 56.8 247.1 48 260.8 48l118.3 0c13.8 0 26 8.8 30.4 21.9l12.2 36.6c1.1 3.3 4.1 5.5 7.6 5.5l82.7 0c26.5 0 48 21.5 48 48l0 193.7 16 12.6zM80 158.3L65.4 146.7C64.5 151 64 155.4 64 160l0 256c0 35.3 28.7 64 64 64l359.5 0-20.3-16L128 464c-26.5 0-48-21.5-48-48l0-256c0-.6 0-1.1 0-1.7zM370.8 387.8l-14.1-11.1C345.4 381.4 333 384 320 384c-53 0-96-43-96-96c0-5.1 .4-10.2 1.2-15.1l-14.1-11.1c-2 8.4-3.1 17.2-3.1 26.2c0 61.9 50.1 112 112 112c18.3 0 35.6-4.4 50.8-12.2z" />
    </Icon>
);

export default CameraSlash;