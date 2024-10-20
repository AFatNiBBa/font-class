
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-medical?s=sharp-duotone-solid briefcase-medical}
 * @preview ![briefcase-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/briefcase-medical.svg)
 */
const BriefcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l24 0L360 0l24 0 0 24 0 72-48 0 0-48L176 48l0 48-48 0 0-72 0-24z" />
        <path d="M512 96L0 96 0 480l512 0 0-384zM224 192l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default BriefcaseMedical;