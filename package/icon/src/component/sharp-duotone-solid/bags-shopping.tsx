
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bags-shopping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bags-shopping?s=sharp-duotone-solid bags-shopping}
 * @preview ![bags-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bags-shopping.svg)
 */
const BagsShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l128 0 0-64c0-53 43-96 96-96s96 43 96 96l0 64 128 0 0 64-288 0 0 256L0 480 0 160zM176 96l0 64 96 0 0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48zM288 320l32 0 0 16 0 16c0 35.3 28.7 64 64 64s64-28.7 64-64l0-16 0-16 32 0 0 16 0 16c0 53-43 96-96 96s-96-43-96-96l0-16 0-16z" />
        <path d="M576 256l-384 0 0 256 384 0 0-256zM320 336l0 16c0 35.3 28.7 64 64 64s64-28.7 64-64l0-16 0-16 32 0 0 16 0 16c0 53-43 96-96 96s-96-43-96-96l0-16 0-16 32 0 0 16z" />
    </Icon>
);

export default BagsShopping;