
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=sharp-thin floppy-disk}
 * @preview ![floppy-disk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/floppy-disk.svg)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 480L0 480l0-16L0 48 0 32l16 0 320 0L448 144l0 320 0 16-16 0L16 480zm416-16l0-313.4L329.4 48 320 48l0 136c0 4.4-3.6 8-8 8L72 192c-4.4 0-8-3.6-8-8L64 48 16 48l0 416 416 0zM80 48l0 128 224 0 0-128L80 48zm72 280a72 72 0 1 0 144 0 72 72 0 1 0 -144 0zm72 88a88 88 0 1 1 0-176 88 88 0 1 1 0 176z" />
    </Icon>
);

export default FloppyDisk;