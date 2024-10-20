
import { Icon } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=sharp-regular pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M13.2 459.2L0 512l52.8-13.2L512 384C512 171.9 340.1 0 128 0L13.2 459.2zm407.9-102C402.2 219.1 292.9 109.8 154.8 90.9L165 50C321 67.1 444.9 191 462 347l-40.9 10.2zM374.2 369L66 446 143 137.8C264 152 360 248 374.2 369zM192 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM224 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default PizzaSlice;