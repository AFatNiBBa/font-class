
import { Icon } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=sharp-solid circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM399.5 256.5C364.4 216.9 313.1 192 256 192s-108.4 24.9-143.5 64.5l-34-34C122.4 174.3 185.7 144 256 144s133.6 30.3 177.5 78.5l-34 34zm-36.1 36.1l-34.4 34.4C313.3 303.5 286.4 288 256 288s-57.3 15.5-73.1 38.9l-34.4-34.4c24.9-32 63.7-52.6 107.4-52.6s82.5 20.6 107.4 52.6zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CircleWifi;