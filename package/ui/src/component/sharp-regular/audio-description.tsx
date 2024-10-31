
import { Icon } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=sharp-regular audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l0 352 480 0 0-352L48 80zM0 32l48 0 480 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM328 160l56 0c53 0 96 43 96 96s-43 96-96 96l-56 0-24 0 0-24 0-144 0-24 24 0zm24 144l32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0 0 96zM173.9 287.8l36.3 0L192 245.2l-18.1 42.6zm-17 40L146.5 352l-52.2 0 75.6-177.4 6.2-14.6 31.7 0 6.2 14.6L289.6 352l-52.2 0-10.3-24.2-70.4 0z" />
    </Icon>
);

export default AudioDescription;