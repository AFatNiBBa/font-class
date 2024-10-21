
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-arrival` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-arrival?s=sharp-duotone-solid plane-arrival}
 * @preview ![plane-arrival](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-arrival.svg)
 */
const PlaneArrival: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448l32 0 576 0 32 0 0 64-32 0L32 512 0 512l0-64zm192-80a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M32 64l.3 132.1 88.5 89.3 298.9 81.2c42.9 11.6 88.3 9.4 129.8-6.4c28.5-10.8 34.4-48.6 10.6-67.6L526 265.3c-13.5-10.8-29-18.8-45.7-23.4L375.7 212.9 256 0 176 0l48.8 170.9L128 144 104 80 32 64z" />
    </Icon>
);

export default PlaneArrival;