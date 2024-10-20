
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=sharp-thin chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 96 416 0 0-96L16 48zM0 32l16 0 416 0 16 0 0 16 0 96 0 16-16 0-16 0 0 104 0 112 0 96 0 8-16 0 0-8 0-88-120 0-104 0 0 88 0 8-16 0 0-8 0-88L48 384l0 88 0 8-16 0 0-8 0-96 0-112 0-104-16 0L0 160l0-16L0 48 0 32zM48 160l0 96 112 0 0-96L48 160zm128 0l0 96 104 0 120 0 0-96-224 0zm-8 208l104 0 0-96-104 0L48 272l0 96 120 0zm120 0l112 0 0-96-112 0 0 96z" />
    </Icon>
);

export default Chimney;