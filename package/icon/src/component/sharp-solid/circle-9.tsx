
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=sharp-solid circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm96-48c0-53-43-96-96-96s-96 43-96 96c0 49.2 37 89.8 84.7 95.3l-44.4 48.4L185.4 384l65.1 0 68.1-74.3c21.4-23.4 33.3-54 33.3-85.7z" />
    </Icon>
);

export default Circle_9;