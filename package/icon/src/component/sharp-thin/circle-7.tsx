
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=sharp-thin circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-374l0-10-8 0-176 0-8 0 0 16 8 0 162.5 0L199.3 384l18.2 0L351 139.8l1-1.8z" />
    </Icon>
);

export default Circle_7;