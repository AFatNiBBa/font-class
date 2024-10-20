
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-0` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-0?s=sharp-duotone-solid square-0}
 * @preview ![square-0](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-0.svg)
 */
const Square_0: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM128 224c0-53 43-96 96-96s96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64zm48 0l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
        <path d="M128 224c0-53 43-96 96-96s96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64zm96-48c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default Square_0;