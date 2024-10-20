
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally-2` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally-2?s=duotone tally-2}
 * @preview ![tally-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tally-2.svg)
 */
const Tally_2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M256 32c17.7 0 32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-384c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Tally_2;