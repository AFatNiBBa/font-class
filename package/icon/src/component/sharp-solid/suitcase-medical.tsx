
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-medical?s=sharp-solid suitcase-medical}
 * @preview ![suitcase-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/suitcase-medical.svg)
 */
const SuitcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 0 32 0 352-256 0 0-352 0-32 0-72 0-24zM336 48L176 48l0 48 160 0 0-48zM96 96l0 384L0 480 0 96l96 0zM416 480l0-384 96 0 0 384-96 0zM224 192l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default SuitcaseMedical;