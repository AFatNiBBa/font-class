
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=duotone mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M384 64c17.7 0 32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0 64 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-64 0z" />
        <path d="M32 96c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32V352c0 53-43 96-96 96H128c-53 0-96-43-96-96V96z" />
    </Icon>
);

export default Mug;