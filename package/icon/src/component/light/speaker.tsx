
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=light speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM272 336a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM80 336a112 112 0 1 1 224 0A112 112 0 1 1 80 336zm88 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56-208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Speaker;