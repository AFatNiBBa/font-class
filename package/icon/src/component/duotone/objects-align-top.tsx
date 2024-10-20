
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=duotone objects-align-top}
 * @preview ![objects-align-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-align-top.svg)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 176l0 288c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48zm224 0l0 160c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48z" />
        <path d="M0 24C0 10.7 10.7 0 24 0H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24z" />
    </Icon>
);

export default ObjectsAlignTop;