
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=regular speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0L248.4 0c-11.8 13.2-20.1 29.7-23.1 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l161.3 0c3.1 18.3 11.3 34.8 23.1 48L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM192 88c13.1 0 24.7 6.3 32 16l0 48c-7.3 9.7-18.9 16-32 16c-22.1 0-40-17.9-40-40s17.9-40 40-40zm0 120c11.1 0 21.9 1.6 32 4.6l0 51.9c-9.4-5.4-20.3-8.6-32-8.6c-35.3 0-64 28.7-64 64s28.7 64 64 64c11.7 0 22.6-3.1 32-8.6l0 51.9c-10.1 3-20.9 4.6-32 4.6c-61.9 0-112-50.1-112-112s50.1-112 112-112zM320 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L320 48zM256 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-384zM448 88a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM336 320a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm112 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Speakers;