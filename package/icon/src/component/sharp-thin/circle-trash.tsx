
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-thin circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160-96l8 0 16 0 12 0 21.6-28.8L220 128l4 0 64 0 4 0 2.4 3.2L316 160l12 0 16 0 8 0 8 0 0 16-8 0-9.1 0L328 384l-144 0L169.1 176l-9.1 0-8 0 0-16 8 0zm56 0l80 0-12-16-56 0-12 16zm110.8 16l-141.6 0 13.7 192 114.2 0 13.7-192z" />
    </Icon>
);

export default CircleTrash;