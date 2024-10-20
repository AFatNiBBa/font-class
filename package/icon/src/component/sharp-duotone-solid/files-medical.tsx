
import { Icon, generic } from "../../index";

/**
 * A component that renders the `files-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files-medical?s=sharp-duotone-solid files-medical}
 * @preview ![files-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/files-medical.svg)
 */
const FilesMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 416 352 0 0-320-96 0 0-96L96 0zm80 224l64 0 0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64z" />
        <path d="M352 96l0-96 96 96-96 0zM48 96l0 24 0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0zm192 64l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default FilesMedical;