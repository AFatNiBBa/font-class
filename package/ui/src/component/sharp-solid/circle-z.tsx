
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=sharp-solid circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-352.5l-4.3 6.2L229.8 336l98.2 0 24 0 0 48-24 0-144 0-24 0 0-31.5 4.3-6.2L282.2 176 184 176l-24 0 0-48 24 0 144 0 24 0 0 31.5z" />
    </Icon>
);

export default CircleZ;