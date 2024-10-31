
import { Icon, generic } from "../../index";

/**
 * A component that renders the `speaker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=duotone speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 336a112 112 0 1 0 224 0A112 112 0 1 0 80 336zm64-224a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M192 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM128 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Speaker;