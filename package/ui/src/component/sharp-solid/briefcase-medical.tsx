
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-medical?s=sharp-solid briefcase-medical}
 * @preview ![briefcase-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/briefcase-medical.svg)
 */
const BriefcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 128 0 0 384L0 480 0 96l128 0 0-72 0-24zM336 48L176 48l0 48 160 0 0-48zM224 192l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default BriefcaseMedical;