
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-pen?s=sharp-duotone-solid floppy-disk-pen}
 * @preview ![floppy-disk-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/floppy-disk-pen.svg)
 */
const FloppyDiskPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 226 0 9-62.6 181-181 0-76.4 0-13.3-9.4-9.4-96-96L333.3 32 320 32 32 32 0 32zM64 96l256 0 0 128L64 224 64 96zM288 352a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M576 294.9l-71-71-41.3 41.3 71 71L576 294.9zm-63.9 63.9l-71-71L299.9 429.1 288 512l82.9-11.9L512.1 358.9z" />
    </Icon>
);

export default FloppyDiskPen;