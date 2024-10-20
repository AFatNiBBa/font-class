
import { Icon } from "../../index";

/**
 * A component that renders the `baguette` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=sharp-solid baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M583 234.5c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5L356.5 77.8l70.8 70.8L438.6 160 416 182.6l-11.3-11.3L329.3 96l-88 58.7 74 74L326.6 240 304 262.6l-11.3-11.3-78.6-78.6-88 58.7 77.2 77.2L214.6 320 192 342.6l-11.3-11.3L98.9 249.6 57 277.5C-1.8 316.7-17.7 396.2 21.5 455s118.7 74.7 177.5 35.5l384-256z" />
    </Icon>
);

export default Baguette;