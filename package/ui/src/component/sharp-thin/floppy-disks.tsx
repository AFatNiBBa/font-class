
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=sharp-thin floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 416l16 0 384 0 16 0 0-16 0-288L400 0 176 0 160 0 112 0 96 0l0 16 0 384 0 16zM112 16l48 0 0 120 0 8 8 0 208 0 8 0 0-8 0-120 9.4 0L496 118.6 496 400l-384 0 0-384zM368 128l-192 0 0-112 192 0 0 112zM240 272a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM16 96L0 96l0 16L0 496l0 16 16 0 384 0 16 0 0-16 0-48-16 0 0 48L16 496l0-384 48 0 0-16L16 96z" />
    </Icon>
);

export default FloppyDisks;