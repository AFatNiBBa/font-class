
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-clouds` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-clouds?s=sharp-duotone-solid face-clouds}
 * @preview ![face-clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-clouds.svg)
 */
const FaceClouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 107.4 66.2 199.4 160 237.4l0-29.4c0-54.7 34.3-101.3 82.5-119.7C317.4 293.8 362.3 256 416 256c29.1 0 55.6 11.1 75.5 29.2c8.9-3.4 18.5-5.2 28.5-5.2c20 0 38.3 7.3 52.3 19.5c2.4-14.1 3.7-28.7 3.7-43.5C576 114.6 461.4 0 320 0c-20.6 0-40.7 2.4-59.9 7C295.2 21.3 320 55.8 320 96l0 64 0 32-32 0-19.9 0c2.7 4.7 4.3 10.2 4.3 16c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16L72.1 192c-5.3 20.5-8.1 41.9-8.1 64zm368.4-48a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96l0 64 224 0 64 0 0-64c0-35.3-28.7-64-64-64l-40.6 0C172.4 12.9 151.7 0 128 0zM336 368c0 .4 0 .9 0 1.3c-45.4 7.6-80 47.1-80 94.7l0 48 384 0 0-48c0-44.7-30.6-82.3-72-93l0-11c0-26.5-21.5-48-48-48c-13.9 0-26.4 5.9-35.1 15.3C470.9 303.8 445.3 288 416 288c-44.2 0-80 35.8-80 80z" />
    </Icon>
);

export default FaceClouds;