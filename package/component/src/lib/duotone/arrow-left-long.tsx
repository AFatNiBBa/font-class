
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=duotone arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M77.3 256c10.7-10.7 21.3-21.3 32-32L480 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0c-10.7-10.7-21.3-21.3-32-32z" />
        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256 182.6 361.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
    </Icon>
);

export default ArrowLeftLong;