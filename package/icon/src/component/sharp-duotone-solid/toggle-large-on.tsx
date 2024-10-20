
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=sharp-duotone-solid toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zm256 64l256 0 0 256-256 0 0-256z" />
        <path d="M256 128h256v256H256V128z" />
    </Icon>
);

export default ToggleLargeOn;