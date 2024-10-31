
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=sharp-light toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 128l-256 0 0 256 256 0 0-256zM288 416l-32 0L32 416 0 416l0-32L0 128 0 96l32 0 224 0 32 0 256 0 32 0 0 32 0 256 0 32-32 0-256 0zm-32-32l0-256L32 128l0 256 224 0zm96-192l0 128 128 0 0-128-128 0zm-32-32l32 0 128 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-128 0-32z" />
    </Icon>
);

export default ToggleLargeOn;