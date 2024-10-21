
import { Icon } from "../../index";

/**
 * A component that renders the `square-9` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-9?s=sharp-solid square-9}
 * @preview ![square-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-9.svg)
 */
const Square_9: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM224 272a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm96-48c0-53-43-96-96-96s-96 43-96 96c0 49.2 37 89.8 84.7 95.3l-44.4 48.4L153.4 384l65.1 0 68.1-74.3c21.4-23.4 33.3-54 33.3-85.7z" />
    </Icon>
);

export default Square_9;