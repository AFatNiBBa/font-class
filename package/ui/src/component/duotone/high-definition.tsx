
import { Icon, generic } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=duotone high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm112 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 48 64 0 0-48c0-13.3 10.7-24 24-24s24 10.7 24 24l0 72 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-64 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72 0-72zm192 0c0-13.3 10.7-24 24-24l56 0c53 0 96 43 96 96s-43 96-96 96l-56 0c-13.3 0-24-10.7-24-24l0-144zm48 24l0 96 32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
        <path d="M160 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 64 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48-64 0 0-48zm168-24c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24l56 0c53 0 96-43 96-96s-43-96-96-96l-56 0zm56 144l-32 0 0-96 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48z" />
    </Icon>
);

export default HighDefinition;