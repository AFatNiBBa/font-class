
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shelves` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=sharp-duotone-solid shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 0 32L0 416l0 32 0 32 0 32 64 0 0-32 512 0 0 32 64 0 0-32 0-32 0-32 0-192 0-32 0-32 0-128 0-32L576 0l0 32 0 128L64 160 64 32 64 0 0 0zM64 224l512 0 0 192L64 416l0-192z" />
        <path d="M480 0L352 0l0 128 128 0L480 0zM96 256l0 128 128 0 0-128L96 256zm160 0l0 128 128 0 0-128-128 0z" />
    </Icon>
);

export default Shelves;