
import { Icon } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=sharp-solid burger-cheese}
 * @preview ![burger-cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/burger-cheese.svg)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 192l0 32 448 0 0-32s0-160-224-160S32 192 32 192zm96-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm240 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM480 384L32 384l0 96 448 0 0-96zM224 256l-32 0s0 0 0 0L16 256l0 96 480 0 0-96-48 0s0 0 0 0l-32 0-96 64-96-64z" />
    </Icon>
);

export default BurgerCheese;