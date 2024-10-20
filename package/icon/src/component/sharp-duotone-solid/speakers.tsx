
import { Icon, generic } from "../../index";

/**
 * A component that renders the `speakers` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=sharp-duotone-solid speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l256 0 0-97.6c-20.3 20.7-48.7 33.6-80 33.6c-61.9 0-112-50.1-112-112s50.1-112 112-112c31.3 0 59.7 12.9 80 33.6L256 0 0 0zM224 112a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM288 0l0 512 352 0L640 0 288 0zM576 336a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zM512 112a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M176 224c31.3 0 59.7 12.9 80 33.6l0 156.8c-20.3 20.7-48.7 33.6-80 33.6c-61.9 0-112-50.1-112-112s50.1-112 112-112zm0-160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm64 272a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM416 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM352 336a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm112 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Speakers;