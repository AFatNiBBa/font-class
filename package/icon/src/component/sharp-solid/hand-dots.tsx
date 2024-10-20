
import { Icon } from "../../index";

/**
 * A component that renders the `hand-dots` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-dots?s=sharp-solid hand-dots}
 * @preview ![hand-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-dots.svg)
 */
const HandDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 224-32 0 0-192 0-32-64 0 0 32 0 272c0 1.5 0 3.1 .1 4.6L84.5 299.1l-29-27.6L.3 329.4l29 27.6 95.5 91c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208 0-32-64 0 0 32 0 128-32 0 0-192 0-32-64 0 0 32 0 192-32 0 0-224zM240 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48-16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-16 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM240 432a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-48-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default HandDots;