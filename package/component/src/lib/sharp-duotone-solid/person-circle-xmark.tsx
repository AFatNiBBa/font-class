
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-xmark?s=sharp-duotone-solid person-circle-xmark}
 * @preview ![person-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-circle-xmark.svg)
 */
const PersonCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.2 270.8l53.9 34.4 33.8-53L88 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 2.3-1.4c8.4-21.4 20.8-40.7 36.3-57L238 142.8 228.6 128l-17.5 0-102.2 0-17.5 0L82 142.8 .2 270.8zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7L502.6 320z" />
    </Icon>
);

export default PersonCircleXmark;