
import { Icon } from "../../index";

/**
 * A component that renders the `futbol` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/futbol?s=sharp-solid futbol}
 * @preview ![futbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/futbol.svg)
 */
const Futbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M406.2 136.4l-28.5 80.1 70.1 48c-1.6 35.9-13 69.2-31.6 97.4l-85-2.3-24 81.5c-16.3 4.5-33.5 6.9-51.2 6.9s-34.9-2.4-51.2-6.9l-24-81.5-85 2.3c-18.6-28.1-30.1-61.5-31.6-97.4l70.1-48-28.5-80.1c21.5-26.9 50-47.9 82.8-60.2L256 128l67.4-51.8c32.8 12.3 61.3 33.3 82.8 60.2zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-336l-76.1 55.3L209 320.7l94 0 29.1-89.4L256 176z" />
    </Icon>
);

export default Futbol;