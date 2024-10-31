
import { Icon, generic } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=sharp-duotone-solid high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM112 160l48 0 0 24 0 48 64 0 0-48 0-24 48 0 0 24 0 72 0 72 0 24-48 0 0-24 0-48-64 0 0 48 0 24-48 0 0-24 0-72 0-72 0-24zm192 0l24 0 56 0c53 0 96 43 96 96s-43 96-96 96l-56 0-24 0 0-24 0-144 0-24zm48 48l0 96 32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
        <path d="M160 184l0-24-48 0 0 24 0 72 0 72 0 24 48 0 0-24 0-48 64 0 0 48 0 24 48 0 0-24 0-72 0-72 0-24-48 0 0 24 0 48-64 0 0-48zm168-24l-24 0 0 24 0 144 0 24 24 0 56 0c53 0 96-43 96-96s-43-96-96-96l-56 0zm56 144l-32 0 0-96 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48z" />
    </Icon>
);

export default HighDefinition;