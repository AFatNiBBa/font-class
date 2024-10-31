
import { Icon } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=sharp-thin circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM184 128l104 0c48.6 0 88 39.4 88 88l0 8-.4 0c-4 44.9-41.7 80-87.6 80l-96 0 0 72 0 8-16 0 0-8 0-72 0-16 0-152 0-8 8 0zM288 288c39.8 0 72-32.2 72-72s-32.2-72-72-72l-96 0 0 144 96 0z" />
    </Icon>
);

export default CircleParking;