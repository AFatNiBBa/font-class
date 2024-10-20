
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=sharp-solid crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 224L0 224 0 352l512 0 0-128zm0 160L0 384 0 512l512 0 0-128zM64 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM48 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM432 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default CrateEmpty;