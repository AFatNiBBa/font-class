
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=duotone pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L432 401.6l0-1.6C432 223.3 288.7 80 112 80l-1.6 0L.5 491.9zM160 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80l1.6 0c176.7 0 320 143.3 320 320l0 1.6 44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM208 240a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default PizzaSlice;