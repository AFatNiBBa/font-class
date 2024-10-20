
import { Icon } from "../../index";

/**
 * A component that renders the `taco` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=sharp-solid taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32l69.9 54.1 88.3-2.7 24.7 84.9L512 218l-22.2 61.8C437.5 207.2 352.3 160 256 160s-181.5 47.2-233.8 119.8L0 218l73.1-49.7L97.8 83.4l88.3 2.7L256 32zM0 480l0-32C0 306.6 114.6 192 256 192s256 114.6 256 256l0 32L0 480zm112-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Taco;