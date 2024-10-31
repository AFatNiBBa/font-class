
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=sharp-solid floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0l24 0L384 0l9.9 0 7 7L505 111l7 7 0 9.9 0 264 0 24-24 0-368 0-24 0 0-24L96 24 96 0zM384 64L160 64l0 96 224 0 0-96zM368 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM48 120l0 344 344 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z" />
    </Icon>
);

export default FloppyDisks;