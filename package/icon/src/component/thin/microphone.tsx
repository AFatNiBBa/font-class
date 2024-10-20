
import { Icon } from "../../index";

/**
 * A component that renders the `microphone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=thin microphone}
 * @preview ![microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/microphone.svg)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M272 96l0 160c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-160c0-44.2 35.8-80 80-80s80 35.8 80 80zM96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96S96 43 96 96zM48 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56c0 85.7 67.4 155.6 152 159.8l0 80.2-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-80.2c84.6-4.2 152-74.1 152-159.8l0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-56z" />
    </Icon>
);

export default Microphone;