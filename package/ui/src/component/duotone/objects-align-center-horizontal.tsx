
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-center-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-center-horizontal?s=duotone objects-align-center-horizontal}
 * @preview ![objects-align-center-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-align-center-horizontal.svg)
 */
const ObjectsAlignCenterHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 112l0 64c0 26.5 21.5 48 48 48l152 0 48 0 152 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L280 64l-48 0L80 64c-26.5 0-48 21.5-48 48zM96 336l0 64c0 26.5 21.5 48 48 48l88 0 48 0 88 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-88 0-48 0-88 0c-26.5 0-48 21.5-48 48z" />
        <path d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40-48 0 0-40zm0 264l0-64 48 0 0 64-48 0zm0 160l48 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40z" />
    </Icon>
);

export default ObjectsAlignCenterHorizontal;