
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-slash?s=regular microphone-slash}
 * @preview ![microphone-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/microphone-slash.svg)
 */
const MicrophoneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 21.2-5.1 41.1-14.2 58.7L408 294.5c5.2-11.8 8-24.8 8-38.5l0-160c0-53-43-96-96-96s-96 43-96 96l0 54.3L38.8 5.1zM272 187.9L272 96c0-26.5 21.5-48 48-48s48 21.5 48 48l0 160c0 2.3-.2 4.6-.5 6.8L272 187.9zm-80 59.4L144.7 210c-.5 1.9-.7 3.9-.7 6l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128l0-8.7z" />
    </Icon>
);

export default MicrophoneSlash;