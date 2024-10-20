
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=duotone diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
    </Icon>
);

export default Diamond;