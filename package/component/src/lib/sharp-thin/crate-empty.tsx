
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=sharp-thin crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 376L16 376l0 120 480 0 0-120zm0-16l0-120L16 240l0 120 480 0zm16 0l0 8 0 8 0 120 0 16-16 0L16 512 0 512l0-16L0 376l0-8 0-8L0 240l0-16 16 0 480 0 16 0 0 16 0 120zM64 304a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm368-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM64 432a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm368-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default CrateEmpty;