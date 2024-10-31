
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=sharp-light floppy-disk}
 * @preview ![floppy-disk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/floppy-disk.svg)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 480L0 480l0-32L0 64 0 32l32 0 304 0L448 144l0 304 0 32-32 0L32 480zm384-32l0-290.7L322.7 64 320 64l0 112 0 16-16 0L80 192l-16 0 0-16L64 64 32 64l0 384 384 0zM96 64l0 96 192 0 0-96L96 64zm80 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" />
    </Icon>
);

export default FloppyDisk;