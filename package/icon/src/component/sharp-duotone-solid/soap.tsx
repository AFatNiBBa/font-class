
import { Icon, generic } from "../../index";

/**
 * A component that renders the `soap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=sharp-duotone-solid soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm96 144a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM352 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M391.6 256c15.2-17 24.4-39.4 24.4-64l96 0 0 320L0 512 0 192l224 0c0 24.6 9.2 47 24.4 64L96 256l-32 0 0 32 0 128 0 32 32 0 320 0 32 0 0-32 0-128 0-32-32 0-24.4 0zM320 288l96 0 0 128L96 416l0-128 224 0z" />
    </Icon>
);

export default Soap;