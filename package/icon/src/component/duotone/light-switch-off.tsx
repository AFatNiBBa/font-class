
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=duotone light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 256l0 96c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-96L96 256z" />
        <path d="M0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448zm96-96l0-192c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64zm80 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0-416a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default LightSwitchOff;