
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-xmark?s=sharp-duotone-solid bridge-circle-xmark}
 * @preview ![bridge-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bridge-circle-xmark.svg)
 */
const BridgeCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l32 0 512 0 32 0 0 64-32 0-40 0 0 64 72 0 0 72.2C577.6 207.1 538.5 192 496 192c-69.1 0-128.9 39.8-157.7 97.7c-5.9-1.1-12-1.7-18.3-1.7c-53 0-96 43-96 96l0 96-96 0 0-96c0-53-43-96-96-96l0-128 72 0 0-64L64 96 32 96l0-64zM152 96l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0zm128 0l0 64 80 0 0-64-80 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7L566.6 320z" />
    </Icon>
);

export default BridgeCircleXmark;