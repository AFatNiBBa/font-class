
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=sharp-thin place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 192l-64 48 0 256L16 496l0-134.9 112-67.2 0-18.7L0 352 0 496l0 16 16 0 144 0s0 0 0 0l16 0 80 0 16 0 96 0 16 0 80 0 16 0s0 0 0 0l144 0 16 0 0-16 0-144L512 275.2l0 18.7 112 67.2L624 496l-144 0 0-256-64-48 0-96L331.3 11.3 320 0 308.7 11.3 224 96l0 96zM464 496l-80 0 0-112c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 112-80 0 0-248 57.6-43.2L240 200l0-8 0-89.4 80-80 80 80 0 89.4 0 8 6.4 4.8L464 248l0 248zm-96 0l-96 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112z" />
    </Icon>
);

export default PlaceOfWorship;