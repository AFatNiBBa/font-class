
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=sharp-thin underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l8 0 128 0 8 0 0 16-8 0L80 48l0 192c0 79.5 64.5 144 144 144s144-64.5 144-144l0-192-56 0-8 0 0-16 8 0 128 0 8 0 0 16-8 0-56 0 0 192c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 48 8 48 0 48 0 32zM0 464l8 0 432 0 8 0 0 16-8 0L8 480l-8 0 0-16z" />
    </Icon>
);

export default Underline;