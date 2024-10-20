
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=sharp-duotone-solid right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c64 0 128 0 192 0c42.7 0 85.3 0 128 0l0 128L0 320 0 192z" />
        <path d="M352 416L512 256 352 96l-32 0s0 0 0 0l0 96 0 128 0 96 32 0z" />
    </Icon>
);

export default RightLong;