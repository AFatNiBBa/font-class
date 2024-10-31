
import { Icon } from "../../index";

/**
 * A component that renders the `file-prescription` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=sharp-thin file-prescription}
 * @preview ![file-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-prescription.svg)
 */
const FilePrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496 16 16zm208 6.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM104 224l-8 0 0 8 0 80 0 80 0 8 16 0 0-8 0-72 52.7 0 64 64-42.3 42.3-5.7 5.7L192 443.3l5.7-5.7L240 395.3l42.3 42.3 5.7 5.7L299.3 432l-5.7-5.7L251.3 384l42.3-42.3 5.7-5.7L288 324.7l-5.7 5.7L240 372.7l-53.8-53.8C207.8 314.2 224 295 224 272c0-26.5-21.5-48-48-48l-72 0zm72 80l-64 0 0-64 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </Icon>
);

export default FilePrescription;