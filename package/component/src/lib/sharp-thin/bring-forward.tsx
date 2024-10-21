
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=sharp-thin bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 496l320 0 0-320-112 0 0-16 112 0 16 0 0 16 0 320 0 16-16 0-320 0-16 0 0-16 0-112 16 0 0 112zM336 352L16 352 0 352l0-16L0 16 0 0 16 0 336 0l16 0 0 16 0 320 0 16-16 0zm-48-64l-16 0L80 288l-16 0 0-16L64 80l0-16 16 0 192 0 16 0 0 16 0 192 0 16zM16 336l320 0 0-320L16 16l0 320zm256-64l0-192L80 80l0 192 192 0z" />
    </Icon>
);

export default BringForward;