
import { Icon, generic } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=sharp-duotone-solid place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352L0 512l160 0 0-240L0 352zm480-80l0 240 160 0 0-160L480 272z" />
        <path d="M224 185.6L224 96 320 0l96 96 0 89.6L480 224l0 288-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-288 64-38.4z" />
    </Icon>
);

export default PlaceOfWorship;