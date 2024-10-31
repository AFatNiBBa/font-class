
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-list` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-list?s=sharp-thin temperature-list}
 * @preview ![temperature-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/temperature-list.svg)
 */
const TemperatureList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 256.8l-7.1 4.8C54.6 284.6 32 323.7 32 368c0 70.7 57.3 128 128 128s128-57.3 128-128c0-44.4-22.6-83.5-56.9-106.5l-7.1-4.8 0-8.5L224 16 96 16l0 232.2 0 8.5zM224 0l16 0 0 16 0 232.2c38.6 25.8 64 69.8 64 119.8c0 79.5-64.5 144-144 144S16 447.6 16 368c0-49.9 25.4-93.9 64-119.8L80 16 80 0 96 0 224 0zM160 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM328 32l176 0 8 0 0 16-8 0L328 48l-8 0 0-16 8 0zm0 128l176 0 8 0 0 16-8 0-176 0-8 0 0-16 8 0zm32 128l144 0 8 0 0 16-8 0-144 0-8 0 0-16 8 0z" />
    </Icon>
);

export default TemperatureList;