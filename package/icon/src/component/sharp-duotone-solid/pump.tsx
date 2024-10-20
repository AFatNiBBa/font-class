
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump?s=sharp-duotone-solid pump}
 * @preview ![pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pump.svg)
 */
const Pump: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l96 0 0-160 160 0 0 160 32 0 0 160L64 384l0-160z" />
        <path d="M160 0L128 0l0 64 32 0 160 0 32 0 0-64L320 0 160 0zM64 208l0-32L0 176l0 32L0 384l0 32 64 0 0-32 0-176zM448 96l-96 64 0 288 96 64 192 0 0-416L448 96zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
    </Icon>
);

export default Pump;