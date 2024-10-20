
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=sharp-light circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 288l0-32 0-221.7C115.4 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224c112.8 0 206.2-83.4 221.7-192L256 288l-32 0zm286 0C494.3 414.3 386.5 512 256 512C114.6 512 0 397.4 0 256C0 125.5 97.7 17.7 224 2c10.5-1.3 21.2-2 32-2l0 32 0 192 0 32 32 0 192 0 32 0c0 10.8-.7 21.5-2 32z" />
    </Icon>
);

export default CircleThreeQuarters;