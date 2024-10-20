
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-wash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wash?s=sharp-duotone-solid car-wash}
 * @preview ![car-wash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-wash.svg)
 */
const CarWash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 80c0 26.5 21.5 48 48 48s48-16 48-48S64 0 64 0s-48 48-48 80zm160 0c0 26.5 21.5 48 48 48s48-16 48-48s-48-80-48-80s-48 48-48 80zm160 0c0 26.5 21.5 48 48 48s48-16 48-48s-48-80-48-80s-48 48-48 80z" />
        <path d="M128 160l-21.1 0-8.3 19.4L52 288l-36 0 0 96 0 64 0 64 80 0 0-64 256 0 0 64 80 0 0-64 0-64 0-96-36 0L349.4 179.4 341.1 160 320 160l-192 0zM326.3 288l-204.7 0 27.4-64 149.8 0 27.4 64zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarWash;