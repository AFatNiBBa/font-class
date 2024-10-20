
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=duotone crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272l0 80 512 0 0-80c0-26.5-21.5-48-48-48L48 224c-26.5 0-48 21.5-48 48zM0 384l0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-80L0 384zm80-96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM464 288a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M64 304a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM464 288a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM448 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default CrateEmpty;