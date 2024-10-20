
import { Icon, generic } from "../../index";

/**
 * A component that renders the `option` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=duotone option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32z" />
        <path d="M423 436c6.1 7.6 15.3 12 25 12l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144.6 0L217 76c-6.1-7.6-15.3-12-25-12L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l144.6 0L423 436z" />
    </Icon>
);

export default Option;