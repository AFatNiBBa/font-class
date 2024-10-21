
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-sharp-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp-half?s=sharp-duotone-solid star-sharp-half}
 * @preview ![star-sharp-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-sharp-half.svg)
 */
const StarSharpHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .2l0 391L454.3 512 390.8 316.4 557.1 195.6l-205.6 0L288 .2z" />
        <path d="M288 391.2l0-391L224.5 195.6l-205.6 0L185.2 316.4 121.7 512 288 391.2z" />
    </Icon>
);

export default StarSharpHalf;