
import { Icon } from "../../index";

/**
 * A component that renders the `files-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files-medical?s=sharp-solid files-medical}
 * @preview ![files-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/files-medical.svg)
 */
const FilesMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 128l0-32 0-96L96 0l0 416 352 0 0-288-96 0-32 0zm96-64L384 32 352 0l0 45.3L352 64l0 32 32 0 18.7 0L448 96 416 64zM48 96L0 96l0 24L0 488l0 24 24 0 304 0 24 0 0-48-24 0L48 464l0-344 0-24zm192 64l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default FilesMedical;