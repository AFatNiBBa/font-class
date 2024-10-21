
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=solid light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm96 96l64 0c35.3 0 64 28.7 64 64l0 80L96 240l0-80c0-35.3 28.7-64 64-64zM288 272l0 80c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-80 192 0zM192 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default LightSwitch;