
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-plane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-plane?s=sharp-duotone-solid truck-plane}
 * @preview ![truck-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-plane.svg)
 */
const TruckPlane: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 80 144-37.7 0 81.2L88 456l0 56 112-31.1 56 19.8L256 96l0-9.9C256 54.7 231.5 0 200 0c-30.6 0-56 54.7-56 86.1l0 106.5L0 288z" />
        <path d="M640 128l-352 0 0 320 32 0 0 64 64 0 0-64 160 0 0 64 64 0 0-64 32 0 0-320zM376 240l176 0 24 64-224 0 24-64zM544 376a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM360 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TruckPlane;