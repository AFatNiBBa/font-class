
import { Icon, generic } from "../../index";

/**
 * A component that renders the `container-storage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/container-storage?s=sharp-duotone-solid container-storage}
 * @preview ![container-storage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/container-storage.svg)
 */
const ContainerStorage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 320 576 0 0-320L32 96zm96 32l48 0 0 24 0 208 0 24-48 0 0-24 0-208 0-24zm112 0l48 0 0 24 0 208 0 24-48 0 0-24 0-208 0-24zm112 0l48 0 0 24 0 208 0 24-48 0 0-24 0-208 0-24zm112 0l48 0 0 24 0 208 0 24-48 0 0-24 0-208 0-24z" />
        <path d="M32 32L0 32 0 96l32 0 576 0 32 0 0-64-32 0L32 32zm0 384L0 416l0 64 32 0 576 0 32 0 0-64-32 0L32 416z" />
    </Icon>
);

export default ContainerStorage;