
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-blank?s=sharp-duotone-solid toilet-paper-blank}
 * @preview ![toilet-paper-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-paper-blank.svg)
 */
const ToiletPaperBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M8 512l357.3 0 8.2-19.7c14.1-34.1 23.6-70.7 29.9-108.3C414.3 320.1 416 253.4 416 192c0-79.2 24-147.2 58.2-176.5C485.8 5.5 498.6 0 512 0L160 0C107 0 64 86 64 192c0 89.9-3.9 190.6-37.6 275.8L8 512z" />
        <path d="M416 192c0 61.4-1.7 128.1-12.5 192L512 384c53 0 96-86 96-192S565 0 512 0c-13.4 0-26.2 5.5-37.8 15.5C440 44.8 416 112.8 416 192c0 0 0 0 0 0zm128 0c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64z" />
    </Icon>
);

export default ToiletPaperBlank;