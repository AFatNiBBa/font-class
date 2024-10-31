
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=sharp-light circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 16 0 224 0 16 32 0 0-16 0-174.1L323 377.3l4.8 6.7 24.2 0 0-16 0-224 0-16-32 0 0 16 0 174.1L189 134.7l-4.8-6.7L160 128z" />
    </Icon>
);

export default CircleN;