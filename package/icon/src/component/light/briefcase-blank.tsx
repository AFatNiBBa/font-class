
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=light briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 48l0 48 192 0 0-48c0-8.8-7.2-16-16-16L176 32c-8.8 0-16 7.2-16 16zM128 96l0-48c0-26.5 21.5-48 48-48L336 0c26.5 0 48 21.5 48 48l0 48 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zm240 32l-224 0-80 0c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-80 0z" />
    </Icon>
);

export default BriefcaseBlank;