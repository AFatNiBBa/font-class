
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=sharp-regular circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm96 48c0 31.7-11.9 62.3-33.3 85.7L250.6 384l-65.1 0 14.9-16.2 44.4-48.4C197 313.8 160 273.2 160 224c0-53 43-96 96-96s96 43 96 96z" />
    </Icon>
);

export default Circle_9;