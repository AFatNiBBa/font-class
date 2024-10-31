
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=duotone diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0c10.2 0 20.5 3.9 28.3 11.7l216 216c7.8 7.8 11.7 18 11.7 28.3s-3.9 20.5-11.7 28.3l-216 216c-7.8 7.8-18 11.7-28.3 11.7L256 0z" />
        <path d="M256 0c-10.2 0-20.5 3.9-28.3 11.7l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c7.8 7.8 18 11.7 28.3 11.7L256 0z" />
    </Icon>
);

export default DiamondHalf;