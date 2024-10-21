
import { Icon } from "../../index";

/**
 * A component that renders the `heading` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=sharp-light heading}
 * @preview ![heading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heading.svg)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l16 0 64 0 64 0 16 0 0 32-16 0L96 64l0 160 256 0 0-160-48 0-16 0 0-32 16 0 64 0 64 0 16 0 0 32-16 0-48 0 0 176 0 208 48 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0 48 0 0-192L96 256l0 192 48 0 16 0 0 32-16 0L16 480 0 480l0-32 16 0 48 0 0-208L64 64 16 64 0 64 0 32z" />
    </Icon>
);

export default Heading;