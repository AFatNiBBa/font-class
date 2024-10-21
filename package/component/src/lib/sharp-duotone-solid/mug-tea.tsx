
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-tea` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea?s=sharp-duotone-solid mug-tea}
 * @preview ![mug-tea](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mug-tea.svg)
 */
const MugTea: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 176l0 112 128 0 0-112-48-48 0-64-32 0 0 64L96 176z" />
        <path d="M144 64l0 64L96 176l0 112 128 0 0-112-48-48 0-64 208 0 32 0 32 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 128L32 448 32 64l112 0zM416 256l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128z" />
    </Icon>
);

export default MugTea;