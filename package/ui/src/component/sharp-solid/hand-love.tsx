
import { Icon } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=sharp-solid hand-love}
 * @preview ![hand-love](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-love.svg)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0l0 32 0 96 0 224 96 0 32 0 96 0 0-96 0-160 0-32 64 0 0 32 0 240c0 97.2-78.8 176-176 176l-19.2 0c-59.6 0-116.9-22.9-160-64L28.3 356.1l-29-27.6 55.2-57.9 29 27.6 44.6 42.4c0-1.5-.1-3.1-.1-4.6l0-304 0-32 64 0zm32 160l64 0 0 160-64 0 0-160zm160 32l0 128-64 0 0-128 64 0z" />
    </Icon>
);

export default HandLove;