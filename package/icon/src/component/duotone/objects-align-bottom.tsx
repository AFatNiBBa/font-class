
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=duotone objects-align-bottom}
 * @preview ![objects-align-bottom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-align-bottom.svg)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 48l0 288c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L112 0C85.5 0 64 21.5 64 48zM288 176l0 160c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48z" />
        <path d="M0 488c0 13.3 10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default ObjectsAlignBottom;