
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-sharp-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp-half-stroke?s=sharp-duotone-solid star-sharp-half-stroke}
 * @preview ![star-sharp-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-sharp-half-stroke.svg)
 */
const StarSharpHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .1c0 60.5 0 120.9 0 181.3c3.5 10.4 6.9 20.9 10.3 31.5l12.6 38.7 40.7 0 33.3 0L358 271.1 325 295l12.6 38.7 10.3 31.7L321 345.8l-32.9-23.9c-.1 23.1-.1 46.2-.1 69.3c29.8 21.6 59.6 43.2 89.3 64.8l77.1 56L425 421.4l-34.1-105 89.3-64.9 77.1-56-95.3 0-110.4 0-34.1-105C307.7 60.4 297.9 30.2 288 .1z" />
        <path d="M288 391.2l0-391L224.5 195.6l-205.6 0L185.2 316.4 121.7 512 288 391.2z" />
    </Icon>
);

export default StarSharpHalfStroke;