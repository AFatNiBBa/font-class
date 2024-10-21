
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=thin speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM288 336A96 96 0 1 0 96 336a96 96 0 1 0 192 0zM80 336a112 112 0 1 1 224 0A112 112 0 1 1 80 336zm112 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm32-176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Speaker;