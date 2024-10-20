
import { Icon, generic } from "../../index";

/**
 * A component that renders the `container-storage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/container-storage?s=duotone container-storage}
 * @preview ![container-storage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/container-storage.svg)
 */
const ContainerStorage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 320 576 0 0-320L32 96zm96 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208zm112 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208zm112 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208zm112 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208z" />
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z" />
    </Icon>
);

export default ContainerStorage;