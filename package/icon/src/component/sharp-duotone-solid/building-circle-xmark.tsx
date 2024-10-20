
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-circle-xmark?s=sharp-duotone-solid building-circle-xmark}
 * @preview ![building-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-circle-xmark.svg)
 */
const BuildingCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 232.2c-39.1 32.3-64 81.1-64 135.8s24.9 103.5 64 135.8l0 8.2-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7L566.6 320z" />
    </Icon>
);

export default BuildingCircleXmark;