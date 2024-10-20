
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=duotone dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M383.2 158.5c-62.6-46.2-151.3-41-208 15.7c-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c56.7-56.7 61.9-145.4 15.7-208L305.2 304.3c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L383.2 158.5z" />
    </Icon>
);

export default Dial;