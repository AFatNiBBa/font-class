
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dashed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dashed?s=sharp-light circle-dashed}
 * @preview ![circle-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-dashed.svg)
 */
const CircleDashed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M1.1 232l32.2 0c4.7-43.9 22-83.9 48.3-116.5L58.8 92.7C26.9 131.3 6 179.3 1.1 232zM115.5 81.5C148.1 55.3 188.1 37.9 232 33.3l0-32.2C179.3 6 131.3 26.9 92.7 58.8l22.7 22.7zM280 478.7l0 32.2c52.7-4.9 100.7-25.8 139.3-57.7l-22.7-22.7c-32.6 26.3-72.7 43.6-116.5 48.3zm150.5-82.2l22.7 22.7c31.9-38.5 52.8-86.6 57.7-139.3l-32.2 0c-4.7 43.9-22 83.9-48.3 116.5zM92.7 453.2c38.5 31.9 86.6 52.8 139.3 57.7l0-32.2c-43.9-4.7-83.9-22-116.5-48.3L92.7 453.2zM58.8 419.3l22.7-22.7C55.3 363.9 37.9 323.9 33.3 280L1.1 280C6 332.7 26.9 380.7 58.8 419.3zM419.3 58.8C380.7 26.9 332.7 6 280 1.1l0 32.2c43.9 4.7 83.9 22 116.5 48.3l22.7-22.7zm11.2 56.7c26.3 32.6 43.6 72.7 48.3 116.5l32.2 0c-4.9-52.7-25.8-100.7-57.7-139.3l-22.7 22.7z" />
    </Icon>
);

export default CircleDashed;