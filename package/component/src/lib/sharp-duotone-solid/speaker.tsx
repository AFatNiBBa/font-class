
import { Icon, generic } from "../../index";

/**
 * A component that renders the `speaker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=sharp-duotone-solid speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512L0 512 0 0zM80 336a112 112 0 1 0 224 0A112 112 0 1 0 80 336zm64-224a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M192 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM128 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Speaker;