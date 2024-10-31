
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=duotone diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 78.5L433.5 256 256 433.5l0 78.5c10.2 0 20.5-3.9 28.3-11.7l216-216c7.8-7.8 11.7-18 11.7-28.3s-3.9-20.5-11.7-28.3l-216-216C276.5 3.9 266.2 0 256 0z" />
        <path d="M256 0c-10.2 0-20.5 3.9-28.3 11.7l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c7.8 7.8 18 11.7 28.3 11.7L256 0z" />
    </Icon>
);

export default DiamondHalfStroke;