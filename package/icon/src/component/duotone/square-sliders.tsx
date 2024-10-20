
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-sliders` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-sliders?s=duotone square-sliders}
 * @preview ![square-sliders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-sliders.svg)
 */
const SquareSliders: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 80c0-17.7 14.3-32 32-32l32 0 0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0 0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-32 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l160 0 0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16L96 368c-17.7 0-32-14.3-32-32z" />
        <path d="M192 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96zM320 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96z" />
    </Icon>
);

export default SquareSliders;