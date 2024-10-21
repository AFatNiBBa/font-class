
import { Icon } from "../../index";

/**
 * A component that renders the `banjo` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banjo?s=sharp-regular banjo}
 * @preview ![banjo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/banjo.svg)
 */
const Banjo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M363.3 114.7L376 64 448 0l64 64-64 72-50.7 12.7-52.5 52.5-17 17-1.2 1.2c16.5 22 27.7 48.2 31.7 76.6l1.7 0 24 0 0 48-24 0-1.7 0c-4.1 28.5-15.3 54.6-31.7 76.6l1.2 1.2 17 17-33.9 33.9-17-17-1.2-1.2c-22 16.5-48.2 27.7-76.6 31.7l0 1.7 0 24-48 0 0-24 0-1.7c-28.5-4.1-54.6-15.3-76.6-31.7l-1.2 1.2-17 17L39.3 438.8l17-17 1.2-1.2C41 398.6 29.8 372.5 25.7 344L24 344 0 344l0-48 24 0 1.7 0c4.1-28.5 15.3-54.6 31.7-76.6l-1.2-1.2-17-17 33.9-33.9 17 17 1.2 1.2c22-16.5 48.2-27.7 76.6-31.7l0-1.7 0-24 48 0 0 24 0 1.7c28.5 4.1 54.6 15.3 76.6 31.7l1.2-1.2 17-17 52.5-52.5zM192 448a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM153 311l48 48 17 17L184 409.9l-17-17-48-48-17-17L136 294.1l17 17z" />
    </Icon>
);

export default Banjo;