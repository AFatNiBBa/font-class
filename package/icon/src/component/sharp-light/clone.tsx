
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-light clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 480l288 0 0-96 32 0 0 96 0 32-32 0L32 512 0 512l0-32L0 192l0-32 32 0 96 0 0 32-96 0 0 288zM192 320l288 0 0-288L192 32l0 288zm-32 32l0-32 0-288 0-32 32 0L480 0l32 0 0 32 0 288 0 32-32 0-288 0-32 0z" />
    </Icon>
);

export default Clone;