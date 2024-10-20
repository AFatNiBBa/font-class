
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally-4` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally-4?s=duotone tally-4}
 * @preview ![tally-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tally-4.svg)
 */
const Tally_4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 0l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 0l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M512 32c17.7 0 32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-384c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Tally_4;