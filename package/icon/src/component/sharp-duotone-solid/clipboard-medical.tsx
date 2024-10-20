
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-medical?s=sharp-duotone-solid clipboard-medical}
 * @preview ![clipboard-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clipboard-medical.svg)
 */
const ClipboardMedical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-24 0-48 0-24 80 0 0 448L0 512 0 64zM96 288l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
        <path d="M270.4 64L304 64l0 96-112 0L80 160l0-96 33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64zM216 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM160 288l0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0z" />
    </Icon>
);

export default ClipboardMedical;