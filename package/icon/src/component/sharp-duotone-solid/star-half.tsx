
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=sharp-duotone-solid star-half}
 * @preview ![star-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-half.svg)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .1l0 430.1L454.3 512 427.9 328.5 557.1 195.6 374.5 164 288 .1z" />
        <path d="M121.7 512L288 430.2 288 .1 201.5 164 18.9 195.6 148.1 328.5 121.7 512z" />
    </Icon>
);

export default StarHalf;