
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-solid diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L256 0 512 256 256 512 0 256z" />
    </Icon>
);

export default Diamond;