
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-bracket?s=sharp-duotone-solid right-from-bracket}
 * @preview ![right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-from-bracket.svg)
 */
const RightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M512 256L352 96l-32 0 0 96-160 0 0 128 160 0 0 96 32 0L512 256z" />
    </Icon>
);

export default RightFromBracket;