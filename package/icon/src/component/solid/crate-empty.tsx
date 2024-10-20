
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=solid crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 224c-26.5 0-48 21.5-48 48l0 80 512 0 0-80c0-26.5-21.5-48-48-48L48 224zM512 384L0 384l0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-80zM64 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM48 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM432 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default CrateEmpty;