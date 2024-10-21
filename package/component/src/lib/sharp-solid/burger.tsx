
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-solid burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224l0-32s0-160 224-160s224 160 224 160l0 32L32 224zm112-96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 352l0-96 480 0 0 96L16 352zM32 480l0-96 448 0 0 96L32 480z" />
    </Icon>
);

export default Burger;