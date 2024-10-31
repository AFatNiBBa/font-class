
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=sharp-regular floppy-disk}
 * @preview ![floppy-disk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/floppy-disk.svg)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 480L0 480l0-48L0 80 0 32l48 0 288 0L448 144l0 288 0 48-48 0L48 480zm352-48l0-268.1-80-80L320 184l0 24-24 0-192 0-24 0 0-24L80 80 48 80l0 352 352 0zM128 80l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default FloppyDisk;