
import { Icon, generic } from "../../index";

/**
 * A component that renders the `download` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=sharp-duotone-solid download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 512l512 0 0-160-178.7 0-54.6 54.6L256 429.3l-22.6-22.6c-18.2-18.2-36.4-36.4-54.6-54.6L0 352zm456 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M288 0l0 32 0 274.7 73.4-73.4L384 210.7 429.3 256l-22.6 22.6-128 128L256 429.3l-22.6-22.6-128-128L82.7 256 128 210.7l22.6 22.6L224 306.7 224 32l0-32 64 0z" />
    </Icon>
);

export default Download;