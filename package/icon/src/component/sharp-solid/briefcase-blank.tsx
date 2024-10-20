
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=sharp-solid briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72L0 96 0 480l512 0 0-384L384 96l0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48z" />
    </Icon>
);

export default BriefcaseBlank;