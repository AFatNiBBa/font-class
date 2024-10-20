
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=sharp-solid place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 96l0 89.6L160 224l0 288 96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-288-64-38.4L416 96 320 0 224 96zM0 344L0 512l128 0 0-238.4L0 344zM640 512l0-168L512 273.6 512 512l128 0z" />
    </Icon>
);

export default PlaceOfWorship;