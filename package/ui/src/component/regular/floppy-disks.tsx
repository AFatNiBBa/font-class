
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=regular floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 352c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-213.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9-33.9 33.9L384.8 52.7c-.3-.3-.5-.5-.8-.8l0 68.1c0 13.3-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24l0-72-16 0c-8.8 0-16 7.2-16 16l0 288zM224 0L373.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3L512 352c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64L96 64c0-35.3 28.7-64 64-64l16 0 48 0zm0 48l0 48 112 0 0-48L224 48zM48 120l0 256c0 48.6 39.4 88 88 88l256 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-256 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24zM240 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default FloppyDisks;