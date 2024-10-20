
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=regular crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 272c-4.4 0-8 3.6-8 8l0 64 416 0 0-64c0-4.4-3.6-8-8-8L56 272zM48 392l0 64c0 4.4 3.6 8 8 8l400 0c4.4 0 8-3.6 8-8l0-64L48 392zM0 280c0-30.9 25.1-56 56-56l400 0c30.9 0 56 25.1 56 56l0 176c0 30.9-25.1 56-56 56L56 512c-30.9 0-56-25.1-56-56L0 280zm400 24a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 304a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM96 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default CrateEmpty;