
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=sharp-duotone-solid circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm78.5-33.5C122.4 174.3 185.7 144 256 144s133.6 30.3 177.5 78.5l-34 34C364.4 216.9 313.1 192 256 192s-108.4 24.9-143.5 64.5l-34-34zm70.1 70.1c24.9-32 63.7-52.6 107.4-52.6s82.5 20.6 107.4 52.6l-34.4 34.4C313.3 303.5 286.4 288 256 288s-57.3 15.5-73.1 38.9l-34.4-34.4zM288 368a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M433.5 222.5l-34 34C364.4 216.9 313.1 192 256 192s-108.4 24.9-143.5 64.5l-34-34C122.4 174.3 185.7 144 256 144s133.6 30.3 177.5 78.5zM256 240c43.7 0 82.5 20.6 107.4 52.6l-34.4 34.4C313.3 303.5 286.4 288 256 288s-57.3 15.5-73.1 38.9l-34.4-34.4c24.9-32 63.7-52.6 107.4-52.6zm0 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CircleWifi;