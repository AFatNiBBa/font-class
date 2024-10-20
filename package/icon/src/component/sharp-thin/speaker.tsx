
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=sharp-thin speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM288 336A96 96 0 1 0 96 336a96 96 0 1 0 192 0zM80 336a112 112 0 1 1 224 0A112 112 0 1 1 80 336zm112 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm32-176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Speaker;