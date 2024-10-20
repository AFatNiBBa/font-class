
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-center-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-center-vertical?s=duotone objects-align-center-vertical}
 * @preview ![objects-align-center-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-align-center-vertical.svg)
 */
const ObjectsAlignCenterVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 80l0 152 0 48 0 152c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-152 0-48 0-152c0-26.5-21.5-48-48-48l-64 0C85.5 32 64 53.5 64 80zm224 64l0 88 0 48 0 88c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-88 0-48 0-88c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48z" />
        <path d="M24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0 48-40 0zm264 0l-64 0 0-48 64 0 0 48zm160 0l0-48 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0z" />
    </Icon>
);

export default ObjectsAlignCenterVertical;