
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=sharp-light speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM272 336a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM80 336a112 112 0 1 1 224 0A112 112 0 1 1 80 336zm88 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56-208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Speaker;