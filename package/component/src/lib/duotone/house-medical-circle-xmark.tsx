
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical-circle-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical-circle-xmark?s=duotone house-medical-circle-xmark}
 * @preview ![house-medical-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-medical-circle-xmark.svg)
 */
const HouseMedicalCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 255.5c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l266.7 0C349.5 480.1 320 427.5 320 368c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 40.2 0c32.3-39.1 81.1-64 135.8-64c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24zM320 352l0 16c0-5.4 .2-10.7 .7-16l-.7 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L496 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L473.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L496 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L518.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default HouseMedicalCircleXmark;