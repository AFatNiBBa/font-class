
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=sharp-light circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-384l-160 0-16 0 0 32 16 0 128.9 0L163 358.7l-3 4.2 0 21.1 16 0 160 0 16 0 0-32-16 0-128.9 0L349 153.3l3-4.2 0-21.1-16 0z" />
    </Icon>
);

export default CircleZ;