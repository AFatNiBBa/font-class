
import { Icon } from "../../index";

/**
 * A component that renders the `shelves` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=sharp-solid shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0l0 32 0 128 512 0 0-128 0-32 64 0 0 32 0 128 0 32 0 32 0 192 0 32 0 32 0 32-64 0 0-32L64 480l0 32L0 512l0-32 0-32 0-32L0 224l0-32 0-32L0 32 0 0 64 0zm0 416l512 0 0-192L64 224l0 192zM352 0L480 0l0 128-128 0L352 0zM224 256l0 128L96 384l0-128 128 0zm160 0l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Shelves;