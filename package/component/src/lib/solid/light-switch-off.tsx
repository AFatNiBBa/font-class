
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=solid light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512zm96-96l64 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64zm32 32a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-416a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM160 384c-17.7 0-32-14.3-32-32l0-96 128 0 0 96c0 17.7-14.3 32-32 32l-64 0z" />
    </Icon>
);

export default LightSwitchOff;