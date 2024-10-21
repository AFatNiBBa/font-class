
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taco` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=sharp-duotone-solid taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0-47.7 13-92.3 35.7-130.5C80.4 242.3 162.3 192 256 192s175.6 50.3 220.3 125.5C499 355.7 512 400.3 512 448l0 32L0 480l0-32zm96-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64-64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M256 32l69.9 54.1 88.3-2.7 24.7 84.9L512 218l-35.7 99.5C431.6 242.3 349.7 192 256 192s-175.6 50.3-220.3 125.5L0 218l73.1-49.7L97.8 83.4l88.3 2.7L256 32z" />
    </Icon>
);

export default Taco;