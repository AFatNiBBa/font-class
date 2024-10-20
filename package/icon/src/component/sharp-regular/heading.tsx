
import { Icon } from "../../index";

/**
 * A component that renders the `heading` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=sharp-regular heading}
 * @preview ![heading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/heading.svg)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l24 0 112 0 24 0 0 48-24 0-32 0 0 144 240 0 0-144-32 0-24 0 0-48 24 0 112 0 24 0 0 48-24 0-32 0 0 168 0 184 32 0 24 0 0 48-24 0-112 0-24 0 0-48 24 0 32 0 0-160-240 0 0 160 32 0 24 0 0 48-24 0L24 480 0 480l0-48 24 0 32 0 0-184L56 80 24 80 0 80 0 32z" />
    </Icon>
);

export default Heading;