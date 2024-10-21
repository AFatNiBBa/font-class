
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=sharp-regular circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-352.5l0-31.5-24 0-144 0-24 0 0 48 24 0 98.2 0L164.3 346.3l-4.3 6.2 0 31.5 24 0 144 0 24 0 0-48-24 0-98.2 0L347.7 165.7l4.3-6.2z" />
    </Icon>
);

export default CircleZ;