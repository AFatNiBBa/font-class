
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pause` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=sharp-duotone-solid pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 64L0 64 0 448l128 0 0-384zm192 0L192 64l0 384 128 0 0-384z" />
    </Icon>
);

export default Pause;