
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=duotone objects-align-left}
 * @preview ![objects-align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-align-left.svg)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 112c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-64zm0 224c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-64z" />
        <path d="M24 0C10.7 0 0 10.7 0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24L48 24C48 10.7 37.3 0 24 0z" />
    </Icon>
);

export default ObjectsAlignLeft;