
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-duotone-solid diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L256 0 512 256 256 512 0 256z" />
    </Icon>
);

export default Diamond;