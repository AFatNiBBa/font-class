
import { Icon, generic } from "../../index";

/**
 * A component that renders the `closed-captioning-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning-slash?s=sharp-duotone-solid closed-captioning-slash}
 * @preview ![closed-captioning-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/closed-captioning-slash.svg)
 */
const ClosedCaptioningSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 480l455.4 0L295 328.4c-16.8 14.7-38.9 23.6-63 23.6c-53 0-96-43-96-96c0-16 3.9-31.1 10.8-44.3L32 121.2zM70.5 32l165 128.1c32.7 1.2 61.2 18.7 77.6 44.6L302 211.7c9.5 7.4 19.1 14.8 28.6 22.2c10-42.3 48-73.9 93.4-73.9c34.2 0 64.1 17.8 81.1 44.6l-40.5 25.7C456 216.9 441 208 424 208c-26.5 0-48 21.5-48 48c0 5.2 .8 10.3 2.4 15l42.4 32.9c1.1 .1 2.2 .1 3.2 .1c17 0 32-8.9 40.6-22.3l40.5 25.7c-9 14.1-21.6 25.8-36.5 33.6L608 449.3 608 32 70.5 32zM184 256c0 26.5 21.5 48 48 48c8.7 0 16.9-2.3 23.9-6.4l-70-55.1c-1.3 4.3-1.9 8.8-1.9 13.5z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ClosedCaptioningSlash;