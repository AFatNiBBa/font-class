
import { Icon, generic } from "../../index";

/**
 * A component that renders the `aperture` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/aperture?s=sharp-duotone-solid aperture}
 * @preview ![aperture](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/aperture.svg)
 */
const Aperture: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 22.1 2.8 43.5 8.1 64l174 0L54.2 98.5C20.2 141.9 0 196.6 0 256zM220.5 509.6c11.6 1.6 23.5 2.4 35.5 2.4c69.9 0 133.2-28 179.4-73.3L348.4 288 220.5 509.6zM237.5 160l255.9 0C463.8 86.9 401.4 30.6 324.5 9.3L237.5 160z" />
        <path d="M256 0c12.1 0 23.9 .8 35.5 2.4L163.6 224 76.6 73.3C122.8 28 186.1 0 256 0zM187.5 502.7C110.6 481.4 48.2 425.1 18.6 352l255.9 0-87 150.7zm270.3-89.2L329.9 192l174 0c5.3 20.5 8.1 41.9 8.1 64c0 59.4-20.2 114.1-54.2 157.5z" />
    </Icon>
);

export default Aperture;