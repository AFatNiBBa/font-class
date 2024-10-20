
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=sharp-light circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm63.3 303.7C340.3 282.5 352 253.8 352 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c.8 0 1.6 0 2.4 0l-61.8 62.8-1.2 1.2 44.9 0 79-80.3zM192 224a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Circle_9;