
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-light diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l22.6 22.6L233.4 489.4 256 512l22.6-22.6L489.4 278.6 512 256l-22.6-22.6L278.6 22.6 256 0 233.4 22.6 22.6 233.4 0 256zM256 466.7L45.3 256 256 45.3 466.7 256 256 466.7z" />
    </Icon>
);

export default Diamond;