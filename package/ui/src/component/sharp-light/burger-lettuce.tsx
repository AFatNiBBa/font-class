
import { Icon } from "../../index";

/**
 * A component that renders the `burger-lettuce` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-lettuce?s=sharp-light burger-lettuce}
 * @preview ![burger-lettuce](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/burger-lettuce.svg)
 */
const BurgerLettuce: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c112.8 0 206.2 83.4 221.7 192c1.5 10.5 2.3 21.1 2.3 32l-32 0L64 256l-32 0c0-10.9 .8-21.5 2.3-32C49.8 115.4 143.2 32 256 32zm0 32C160.9 64 81.9 133.2 66.7 224l378.7 0C430.1 133.2 351.1 64 256 64zM64 448l384 0 0-64L64 384l0 64zM32 352l32 0 384 0 32 0 0 32 0 64 0 32-32 0L64 480l-32 0 0-32 0-64 0-32zM144 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM173.5 273L256 303l82.5-30 5.5-2 5.5 2 82.4 30L490.4 281l11.2 30-64 24-5.5 2.1-5.6-2L344 305l-82.5 30-5.5 2-5.5-2L168 305 85.5 335l-5.6 2L74.4 335l-64-24 11.2-30 58.5 21.9 82.4-30 5.5-2 5.5 2z" />
    </Icon>
);

export default BurgerLettuce;