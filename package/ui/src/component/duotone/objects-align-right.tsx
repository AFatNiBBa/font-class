
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=duotone objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112l0 64c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64C21.5 64 0 85.5 0 112zM128 336l0 64c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48z" />
        <path d="M488 0c13.3 0 24 10.7 24 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ObjectsAlignRight;