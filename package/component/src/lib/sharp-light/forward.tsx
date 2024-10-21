
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-light forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M483.2 275.2L512 256l-28.8-19.2L256 85.3 224 64l0 38.5 0 95.9L32 83.2 0 64l0 37.3L0 410.7 0 448l32-19.2L224 313.6l0 95.9 0 38.5 32-21.3L483.2 275.2zM224 276.3L32 391.5l0-271L224 235.7l0 40.6zm32 111.9l0-264.4L454.3 256 256 388.2z" />
    </Icon>
);

export default Forward;