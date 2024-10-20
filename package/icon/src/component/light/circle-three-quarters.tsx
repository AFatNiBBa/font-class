
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=light circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 288c-17.7 0-32-14.3-32-32l0-221.7C115.5 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224c112.8 0 206.2-83.5 221.7-192L256 288zM224.1 2C241.6-.2 256 14.3 256 32l0 192 0 32 32 0 192 0c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 256C0 125.4 97.8 17.7 224.1 2z" />
    </Icon>
);

export default CircleThreeQuarters;