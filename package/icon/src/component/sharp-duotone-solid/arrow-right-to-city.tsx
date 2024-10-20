
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-city` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-city?s=sharp-duotone-solid arrow-right-to-city}
 * @preview ![arrow-right-to-city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-to-city.svg)
 */
const ArrowRightToCity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 0l0 512 96 0 96 0 160 0 0-320-72 0 0-72 0-24-48 0 0 24 0 72-40 0L480 0 288 0zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm160 0l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M150.6 153.4L128 130.7 82.7 176l22.6 22.6L130.7 224 32 224 0 224l0 64 32 0 98.7 0-25.4 25.4L82.7 336 128 381.3l22.6-22.6 80-80L253.3 256l-22.6-22.6-80-80z" />
    </Icon>
);

export default ArrowRightToCity;