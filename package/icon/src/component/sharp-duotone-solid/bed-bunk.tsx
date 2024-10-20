
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=sharp-duotone-solid bed-bunk}
 * @preview ![bed-bunk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bed-bunk.svg)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 48a48 48 0 1 0 96 0A48 48 0 1 0 96 48zm0 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM224 0l0 128 32 0 256 0 32 0 32 0C576 57.3 518.7 0 448 0L224 0zm0 256l0 128 32 0 256 0 0-128-288 0z" />
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-32 192 0 256 0 0 32 0 32 64 0 0-32 0-320 0-32-32 0-32 0-256 0L64 128l0-96zM512 384l-256 0L64 384l0-192 192 0 256 0 0 192z" />
    </Icon>
);

export default BedBunk;