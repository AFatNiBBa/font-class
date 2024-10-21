
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=sharp-light circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 144l-16 0 0 32 16 0 96 0 0 192 0 16 32 0 0-16 0-192 96 0 16 0 0-32-16 0-112 0-112 0z" />
    </Icon>
);

export default CircleT;