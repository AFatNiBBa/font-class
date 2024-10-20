
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-0` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-0?s=duotone square-0}
 * @preview ![square-0](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-0.svg)
 */
const Square_0: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM128 224c0-53 43-96 96-96s96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64zm48 0l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
        <path d="M128 224c0-53 43-96 96-96s96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64zm96-48c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default Square_0;