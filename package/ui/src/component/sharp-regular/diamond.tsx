
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-regular diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l33.9 33.9L222.1 478.1 256 512l33.9-33.9L478.1 289.9 512 256l-33.9-33.9L289.9 33.9 256 0 222.1 33.9 33.9 222.1 0 256zM256 444.1L67.9 256 256 67.9 444.1 256 256 444.1z" />
    </Icon>
);

export default Diamond;