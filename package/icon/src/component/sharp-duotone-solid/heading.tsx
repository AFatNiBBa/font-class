
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heading` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=sharp-duotone-solid heading}
 * @preview ![heading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heading.svg)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 16 0 64 0 16 0 32 0 0 64-32 0-16 0 0 112 224 0 0-112-16 0-32 0 0-64 32 0 16 0 64 0 16 0 32 0 0 64-32 0-16 0 0 144 0 176 16 0 32 0 0 64-32 0-16 0-64 0-16 0-32 0 0-64 32 0 16 0 0-144-224 0 0 144 16 0 32 0 0 64-32 0-16 0-64 0-16 0L0 480l0-64 32 0 16 0 0-176L48 96 32 96 0 96 0 32z" />
    </Icon>
);

export default Heading;