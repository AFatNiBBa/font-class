
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=sharp-duotone-solid floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 488l0 24 24 0 368 0 24 0 0-48-24 0L48 464l0-344 0-24L0 96zM240 288a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M120 0L96 0l0 24 0 368 0 24 24 0 368 0 24 0 0-24 0-264 0-9.9-7-7L401 7l-7-7L384 0 120 0zm40 64l224 0 0 96-224 0 0-96zM304 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default FloppyDisks;