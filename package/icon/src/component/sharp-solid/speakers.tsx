
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=sharp-solid speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L256 0l0 257.6c-20.3-20.7-48.7-33.6-80-33.6c-61.9 0-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6l0 97.6L0 512 0 0zM352 512l-32 0-32 0 0-32 0-144 0-304 0-32 32 0 32 0L640 0l0 512-288 0zm0-176a112 112 0 1 0 224 0 112 112 0 1 0 -224 0zM176 272a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM400 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Speakers;