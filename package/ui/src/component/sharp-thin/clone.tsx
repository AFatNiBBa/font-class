
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-thin clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 496l320 0 0-112 16 0 0 112 0 16-16 0L16 512 0 512l0-16L0 176l0-16 16 0 112 0 0 16L16 176l0 320zM160 352l0-16 0-320 0-16 16 0L496 0l16 0 0 16 0 320 0 16-16 0-320 0-16 0zm16-16l320 0 0-320L176 16l0 320z" />
    </Icon>
);

export default Clone;