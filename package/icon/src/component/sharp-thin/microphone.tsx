
import { Icon } from "../../index";

/**
 * A component that renders the `microphone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=sharp-thin microphone}
 * @preview ![microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/microphone.svg)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M112 16l160 0 0 240c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-240zM96 0l0 16 0 240c0 53 43 96 96 96s96-43 96-96l0-240 0-16L272 0 112 0 96 0zM48 200l0-8-16 0 0 8 0 56c0 85.7 67.4 155.6 152 159.8l0 80.2-80 0-8 0 0 16 8 0 88 0 88 0 8 0 0-16-8 0-80 0 0-80.2c84.6-4.2 152-74.1 152-159.8l0-56 0-8-16 0 0 8 0 56c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-56z" />
    </Icon>
);

export default Microphone;