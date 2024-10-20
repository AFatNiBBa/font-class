
import { Icon, generic } from "../../index";

/**
 * A component that renders the `8` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/8?s=duotone 8}
 * @preview ![8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/8.svg)
 */
const $8: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M304 160c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89C20.5 272.3 0 309.8 0 352c0 70.7 57.3 128 128 128l64 0c70.7 0 128-57.3 128-128c0-42.2-20.5-79.7-52-103c22.3-23 36-54.4 36-89zM176.1 288l15.9 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l15.9 0c0 0 .1 0 .1 0l32 0c0 0 .1 0 .1 0zm0-64c0 0 0 0 0 0l-32 0c0 0 0 0 0 0c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64c0 35.3-28.6 64-64 64z" />
    </Icon>
);

export default $8;