
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paperclip-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip-vertical?s=duotone paperclip-vertical}
 * @preview ![paperclip-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paperclip-vertical.svg)
 */
const PaperclipVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 128C32 57.3 89.3 0 160 0s128 57.3 128 128l0 192c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 208c0 61.9 50.1 112 112 112s112-50.1 112-112l0-176c0-17.7 14.3-32 32-32s32 14.3 32 32l0 176c0 97.2-78.8 176-176 176s-176-78.8-176-176l0-208z" />
    </Icon>
);

export default PaperclipVertical;