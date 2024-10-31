
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=sharp-solid speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L384 0l0 512L0 512 0 0zM304 336A112 112 0 1 0 80 336a112 112 0 1 0 224 0zM192 272a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Speaker;