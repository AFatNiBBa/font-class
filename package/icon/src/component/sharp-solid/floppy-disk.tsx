
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=sharp-solid floppy-disk}
 * @preview ![floppy-disk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/floppy-disk.svg)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-288 0-13.3-9.4-9.4-96-96L333.3 32 320 32 32 32zM64 96l256 0 0 128L64 224 64 96zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default FloppyDisk;