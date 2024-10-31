
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-light circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160 144l32.1 0 9.3 0 11.3-11.3 4.7-4.7 6.6 0 64 0 6.6 0 4.7 4.7L310.6 144l9.3 0 32.1 0 16 0 0 32-16 0-2.1 0L336 384l-160 0L162.1 176l-2.1 0-16 0 0-32 16 0zm157.8 32l-123.6 0 11.7 176 100.1 0 11.7-176z" />
    </Icon>
);

export default CircleTrash;