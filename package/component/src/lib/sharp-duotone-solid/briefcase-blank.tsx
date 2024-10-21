
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=sharp-duotone-solid briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l24 0L360 0l24 0 0 24 0 72-48 0 0-48L176 48l0 48-48 0 0-72 0-24z" />
        <path d="M512 96L0 96 0 480l512 0 0-384z" />
    </Icon>
);

export default BriefcaseBlank;