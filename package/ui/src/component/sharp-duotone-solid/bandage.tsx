
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bandage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=sharp-duotone-solid bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416l160 0 0-320L0 96zm192 0l0 320 256 0 0-320L192 96zM296 208a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM480 96l0 320 160 0 0-320L480 96z" />
        <path d="M192 96l-32 0 0 320 32 0 0-320zm288 0l-32 0 0 320 32 0 0-320z" />
    </Icon>
);

export default Bandage;