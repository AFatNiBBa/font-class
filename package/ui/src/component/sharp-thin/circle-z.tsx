
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=sharp-thin circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-384l-192 0-8 0 0 16 8 0 175.4 0L153.8 371l-1.8 2.2 0 10.8 8 0 192 0 8 0 0-16-8 0-175.4 0L358.2 141l1.8-2.2 0-10.8-8 0z" />
    </Icon>
);

export default CircleZ;