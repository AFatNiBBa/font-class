
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ramp-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp-box?s=sharp-duotone-solid truck-ramp-box}
 * @preview ![truck-ramp-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-ramp-box.svg)
 */
const TruckRampBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M14.8 176.8l216.4-58 58 216.4-216.4 58-58-216.4zm77.3-20.7l24.8 92.7 61.8-16.6-24.8-92.7L92.1 156.1zM544 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
        <path d="M544 288c-66.1 0-120.6 50.2-127.3 114.5L48.4 502.9l-30.9 8.4L.7 449.5l30.9-8.4L352 353.8 352 0 640 0l0 331.3c-23.5-26.6-57.8-43.3-96-43.3zM153.9 139.5l24.8 92.7-61.8 16.6L92.1 156.1l61.8-16.6z" />
    </Icon>
);

export default TruckRampBox;