
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=sharp-solid arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 192L160 96l0-32 64 0 0-32 0-32 64 0 0 32 0 32 64 0 0 32-96 96zM416 352l-96-96 96-96 32 0 0 64 32 0 32 0 0 64-32 0-32 0 0 64-32 0zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64l96 96 0 32-64 0 0 32 0 32-64 0 0-32 0-32-64 0 0-32 96-96zM96 352l-32 0 0-64-32 0L0 288l0-64 32 0 32 0 0-64 32 0 96 96L96 352z" />
    </Icon>
);

export default ArrowsToDot;