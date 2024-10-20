
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=sharp-regular briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72L48 96 0 96l0 48L0 432l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0-80 0 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM152 144l208 0 104 0 0 288L48 432l0-288 104 0z" />
    </Icon>
);

export default BriefcaseBlank;