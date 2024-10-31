
import { Icon } from "../../index";

/**
 * A component that renders the `expand` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=sharp-light expand}
 * @preview ![expand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/expand.svg)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 32l16 0 0 32-16 0L32 64l0 112 0 16L0 192l0-16L0 48 0 32l16 0 128 0zM0 336l0-16 32 0 0 16 0 112 112 0 16 0 0 32-16 0L16 480 0 480l0-16L0 336zM432 32l16 0 0 16 0 128 0 16-32 0 0-16 0-112L304 64l-16 0 0-32 16 0 128 0zM416 336l0-16 32 0 0 16 0 128 0 16-16 0-128 0-16 0 0-32 16 0 112 0 0-112z" />
    </Icon>
);

export default Expand;