
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-medical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-medical?s=sharp-regular briefcase-medical}
 * @preview ![briefcase-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/briefcase-medical.svg)
 */
const BriefcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 80 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 144 0 96l48 0 80 0 0-72 0-24zM336 48L176 48l0 48 160 0 0-48zM48 144l0 288 416 0 0-288-104 0-208 0L48 144zm176 48l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default BriefcaseMedical;