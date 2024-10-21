
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=solid speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0L280.4 0C265.2 17 256 39.4 256 64l0 193.6c-20.3-20.7-48.7-33.6-80-33.6c-61.9 0-112 50.1-112 112s50.1 112 112 112c31.3 0 59.7-12.9 80-33.6l0 33.6c0 24.6 9.2 47 24.4 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM320 503.4c-19.1-11.1-32-31.7-32-55.4l0-112 0-272c0-23.7 12.9-44.4 32-55.4C329.4 3.1 340.3 0 352 0L576 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-224 0c-11.7 0-22.6-3.1-32-8.6zM352 336a112 112 0 1 0 224 0 112 112 0 1 0 -224 0zM176 272a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM400 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Speakers;