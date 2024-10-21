
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-light circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 16 0 154.5 0 69.5 0 16 32 0 0-16 0-62.9 43.4-43.7L321.3 384l39.1 0-102-145.7L368.1 128l-45.1 0L192 259.7 192 144l0-16-32 0z" />
    </Icon>
);

export default CircleK;