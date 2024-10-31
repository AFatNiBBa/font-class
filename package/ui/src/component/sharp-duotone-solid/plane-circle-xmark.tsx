
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-circle-xmark?s=sharp-duotone-solid plane-circle-xmark}
 * @preview ![plane-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-circle-xmark.svg)
 */
const PlaneCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 96 192-64 0 80-64 48 0 64 128-32 128 32 0-8.2c-39.1-32.3-64-81.1-64-135.8c0-64.1 34.3-120.2 85.5-151L320 160l0-66.3C320 59.5 292 0 256 0c-35 0-64 59.5-64 93.7l0 66.3L0 288z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7L566.6 320z" />
    </Icon>
);

export default PlaneCircleXmark;