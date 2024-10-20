
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-light dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 496l16 16 16-16 6.6-6.6L486.2 281.8l3.2-3.2L512 256l-12.6-12.6-10-10L278.6 22.6 272 16 256 0 240 16l-6.6 6.6L22.6 233.4l-10 10L0 256l22.6 22.6 3.2 3.2L233.4 489.4 240 496zm0-45.3L94.7 305.5 240 355.4l0 95.3zM46.3 255L240 61.3l0 260.3L46.3 255zM272 61.3L465.7 255 272 321.6l0-260.3zm0 294.2l145.3-49.9L272 450.7l0-95.3z" />
    </Icon>
);

export default DiceD8;