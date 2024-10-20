
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spray-can` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can?s=duotone spray-can}
 * @preview ![spray-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spray-can.svg)
 */
const SprayCan: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 336a80 80 0 1 0 160 0A80 80 0 1 0 80 336zM256 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M128 0l64 0c17.7 0 32 14.3 32 32l0 96L96 128l0-96c0-17.7 14.3-32 32-32zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 208c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0z" />
    </Icon>
);

export default SprayCan;