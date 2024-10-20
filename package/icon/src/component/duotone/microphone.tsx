
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microphone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=duotone microphone}
 * @preview ![microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/microphone.svg)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 216l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M96 96c0-53 43-96 96-96s96 43 96 96V256c0 53-43 96-96 96s-96-43-96-96V96z" />
    </Icon>
);

export default Microphone;