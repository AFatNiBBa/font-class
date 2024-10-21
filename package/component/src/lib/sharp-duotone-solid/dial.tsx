
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=sharp-duotone-solid dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
        <path d="M383.2 158.5c-62.6-46.2-151.3-41-208 15.7c-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c56.7-56.7 61.9-145.4 15.7-208L305.2 304.3l-17 17-33.9-33.9 17-17L383.2 158.5z" />
    </Icon>
);

export default Dial;