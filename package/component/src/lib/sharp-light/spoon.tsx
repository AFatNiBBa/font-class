
import { Icon } from "../../index";

/**
 * A component that renders the `spoon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=sharp-light spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 160.2c0-27.5 17-59.3 48.5-85.6C335.6 48.7 376.5 32 416 32c35.3 0 64 28.7 64 64c0 39.5-16.7 80.4-42.6 111.5C411.1 239 379.3 256 351.8 256l-26.3 0-18.7-18.7-32-32L256 186.5l0-26.3zm28.1 99.7L312.2 288l39.6 0C432 288 512 192 512 96c0-53-43-96-96-96C320 0 224 80 224 160.2l0 39.6 28.1 28.1 4.7 4.7L4.7 484.7l22.6 22.6L279.4 255.2l4.7 4.7z" />
    </Icon>
);

export default Spoon;