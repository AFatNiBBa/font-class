
import { Icon } from "../../index";

/**
 * A component that renders the `hand` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=sharp-solid hand}
 * @preview ![hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand.svg)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 224-32 0 0-192 0-32-64 0 0 32 0 272c0 1.5 0 3.1 .1 4.6L84.5 299.1l-29-27.6L.3 329.4l29 27.6 95.5 91c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208 0-32-64 0 0 32 0 128-32 0 0-192 0-32-64 0 0 32 0 192-32 0 0-224z" />
    </Icon>
);

export default Hand;