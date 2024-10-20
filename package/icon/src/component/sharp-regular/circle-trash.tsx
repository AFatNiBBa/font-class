
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-regular circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160 128l41.4 0 11.3-11.3 4.7-4.7 6.6 0 64 0 6.6 0 4.7 4.7L310.6 128l41.4 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0zm0 64l192 0L336 384l-160 0L160 192z" />
    </Icon>
);

export default CircleTrash;