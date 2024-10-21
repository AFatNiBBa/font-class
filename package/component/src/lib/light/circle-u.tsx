
import { Icon } from "../../index";

/**
 * A component that renders the `circle-u` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=light circle-u}
 * @preview ![circle-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-u.svg)
 */
const CircleU: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 61.9 50.1 112 112 112s112-50.1 112-112l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-128z" />
    </Icon>
);

export default CircleU;