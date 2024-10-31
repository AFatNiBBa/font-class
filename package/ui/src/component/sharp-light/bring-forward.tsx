
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=sharp-light bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 480l288 0 0-288-96 0 0-32 96 0 32 0 0 32 0 288 0 32-32 0-288 0-32 0 0-32 0-96 32 0 0 96zM32 320l288 0 0-288L32 32l0 288zm288 32L32 352 0 352l0-32L0 32 0 0 32 0 320 0l32 0 0 32 0 288 0 32-32 0zm-64-96l0-160L96 96l0 160 160 0zm32 32l-32 0L96 288l-32 0 0-32L64 96l0-32 32 0 160 0 32 0 0 32 0 160 0 32z" />
    </Icon>
);

export default BringForward;