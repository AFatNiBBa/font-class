
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=sharp-light circle-arrow-down}
 * @preview ![circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-arrow-down.svg)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm11.3-132.7L256 390.6l-11.3-11.3-96-96L137.4 272 160 249.4l11.3 11.3L240 329.4 240 144l0-16 32 0 0 16 0 185.4 68.7-68.7L352 249.4 374.6 272l-11.3 11.3-96 96z" />
    </Icon>
);

export default CircleArrowDown;