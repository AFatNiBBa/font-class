
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=sharp-light crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 384L32 384l0 96 448 0 0-96zm0-32l0-96L32 256l0 96 448 0zm32 0l0 16 0 16 0 96 0 32-32 0L32 512 0 512l0-32 0-96 0-16 0-16 0-96 0-32 32 0 448 0 32 0 0 32 0 96zM64 304a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm368-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM64 432a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm368-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default CrateEmpty;