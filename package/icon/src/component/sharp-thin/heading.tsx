
import { Icon } from "../../index";

/**
 * A component that renders the `heading` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=sharp-thin heading}
 * @preview ![heading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/heading.svg)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l8 0 64 0 64 0 8 0 0 16-8 0L80 48l0 192 288 0 0-192-56 0-8 0 0-16 8 0 64 0 64 0 8 0 0 16-8 0-56 0 0 200 0 216 56 0 8 0 0 16-8 0-64 0-64 0-8 0 0-16 8 0 56 0 0-208L80 256l0 208 56 0 8 0 0 16-8 0-64 0L8 480l-8 0 0-16 8 0 56 0 0-216L64 48 8 48 0 48 0 32z" />
    </Icon>
);

export default Heading;