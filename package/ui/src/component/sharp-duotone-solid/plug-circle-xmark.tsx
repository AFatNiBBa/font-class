
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-xmark?s=sharp-duotone-solid plug-circle-xmark}
 * @preview ![plug-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plug-circle-xmark.svg)
 */
const PlugCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l32 0 320 0 32 0 0 38.6C310.1 219.5 256 287.4 256 368c0 11.4 1.1 22.5 3.1 33.3c-11.1 5.1-22.9 9-35.1 11.5l0 99.2-64 0 0-99.2C87 398 32 333.4 32 256l0-32L0 224l0-64zM64 0l64 0 0 32 0 96-64 0 0-96L64 0zM256 0l64 0 0 32 0 96-64 0 0-96 0-32z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7L502.6 320z" />
    </Icon>
);

export default PlugCircleXmark;