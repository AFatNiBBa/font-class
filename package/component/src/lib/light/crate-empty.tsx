
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=light crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 384l0 72c0 13.3-10.7 24-24 24L56 480c-13.3 0-24-10.7-24-24l0-72 448 0zm0-32L32 352l0-72c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24l0 72zm32 0l0-72c0-30.9-25.1-56-56-56L56 224c-30.9 0-56 25.1-56 56l0 72 0 16 0 16 0 72c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-72 0-16 0-16zM96 304a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 432a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default CrateEmpty;