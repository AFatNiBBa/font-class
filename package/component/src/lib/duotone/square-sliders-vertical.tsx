
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-sliders-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-sliders-vertical?s=duotone square-sliders-vertical}
 * @preview ![square-sliders-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-sliders-vertical.svg)
 */
const SquareSlidersVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 96c0 17.7 14.3 32 32 32l16 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-16 0c-17.7 0-32 14.3-32 32zM224 320c0 17.7 14.3 32 32 32l16 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-16 0c-17.7 0-32 14.3-32 32z" />
        <path d="M96 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0zM256 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z" />
    </Icon>
);

export default SquareSlidersVertical;