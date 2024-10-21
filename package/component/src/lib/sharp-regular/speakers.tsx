
import { Icon } from "../../index";

/**
 * A component that renders the `speakers` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=sharp-regular speakers}
 * @preview ![speakers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/speakers.svg)
 */
const Speakers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 208c11.1 0 21.9 1.6 32 4.6l0 51.9c-9.4-5.4-20.3-8.6-32-8.6c-35.3 0-64 28.7-64 64s28.7 64 64 64c11.7 0 22.6-3.1 32-8.6l0 51.9c-10.1 3-20.9 4.6-32 4.6c-61.9 0-112-50.1-112-112s50.1-112 112-112zm32-56c-7.3 9.7-18.9 16-32 16c-22.1 0-40-17.9-40-40s17.9-40 40-40c13.1 0 24.7 6.3 32 16l0 48zM48 48l0 416 176 0 0 48L48 512 0 512l0-48L0 48 0 0 48 0 224 0l0 48L48 48zm256 0l0 416 288 0 0-416L304 48zM256 0l48 0L592 0l48 0 0 48 0 416 0 48-48 0-288 0-48 0 0-48 0-416 0-48zM448 88a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM336 320a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm112 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Speakers;