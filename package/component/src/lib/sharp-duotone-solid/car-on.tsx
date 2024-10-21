
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-on?s=sharp-duotone-solid car-on}
 * @preview ![car-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-on.svg)
 */
const CarOn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M22.1 56L39 73l48 48 17 17L137.9 104 121 87 73 39l-17-17L22.1 56zM232 0l0 24 0 80 0 24 48 0 0-24 0-80 0-24L232 0zM374.1 104L408 137.9l17-17 48-48 17-17L456 22.1 439 39 391 87l-17 17z" />
        <path d="M160 160l-21.1 0-8.3 19.4L84 288l-36 0 0 96 0 64 0 64 80 0 0-64 256 0 0 64 80 0 0-64 0-64 0-96-36 0L381.4 179.4 373.1 160 352 160l-192 0zM358.3 288l-204.7 0 27.4-64 149.8 0 27.4 64zM104 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarOn;