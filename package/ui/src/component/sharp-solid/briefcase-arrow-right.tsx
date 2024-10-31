
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=sharp-solid briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 128 0 0 384L0 480 0 96l128 0 0-72 0-24zM336 48L176 48l0 48 160 0 0-48zM297 191l-17-17L246.1 208l17 17 39 39L152 264l-24 0 0 48 24 0 150.1 0-39 39-17 17L280 401.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default BriefcaseArrowRight;