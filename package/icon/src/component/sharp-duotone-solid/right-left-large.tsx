
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-left-large` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left-large?s=sharp-duotone-solid right-left-large}
 * @preview ![right-left-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-left-large.svg)
 */
const RightLeftLarge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 314.7l0 42.5L154.7 512 256 512l0-64 96 0 0-64-160 0 0 64-10.7 0L69.3 336l112-112 10.7 0 0 64 128 0 0-64-64 0 0-64-101.3 0L0 314.7z" />
        <path d="M485.3 352H384V288H320V224H448v64h10.7l112-112L458.7 64H448v64H288V64h96V0H485.3L640 154.7v42.5L485.3 352z" />
    </Icon>
);

export default RightLeftLarge;