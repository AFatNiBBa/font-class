
import { Icon } from "../../index";

/**
 * A component that renders the `candy-corn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-corn?s=sharp-regular candy-corn}
 * @preview ![candy-corn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/candy-corn.svg)
 */
const CandyCorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 32l0 96L448 416l64 0L640 128l0-96s-32-32-160-32S320 32 320 32zM592 61.3l0 47.7C566.6 104.3 516.2 96 480 96s-86.6 8.3-112 12.9l0-47.7c18.2-6 52.8-13.3 112-13.3s93.8 7.3 112 13.3zM479.2 368l-37.6-84.5c12.2-1.8 26.6-3.5 38.4-3.5s26.2 1.7 38.4 3.5L480.8 368l-1.6 0zM0 330.9l67.9 67.9L362 511.9l45.3-45.3L294.2 172.5l-67.9-67.9s-45.3 0-135.8 90.5S0 330.9 0 330.9zM213 159.3L246.7 193c-21.2 14.7-62.7 44.4-88.3 70.1s-55.4 67.1-70.1 88.3L54.6 317.7c8.7-17.1 27.9-46.7 69.8-88.6s71.5-61.1 88.6-69.8zM350.2 455.9l-86.3-33.2c7.3-9.9 16.3-21.3 24.7-29.6s19.7-17.3 29.6-24.7l33.2 86.3-1.1 1.1z" />
    </Icon>
);

export default CandyCorn;