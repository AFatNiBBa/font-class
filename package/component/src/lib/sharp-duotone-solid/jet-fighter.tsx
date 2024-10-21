
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jet-fighter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jet-fighter?s=sharp-duotone-solid jet-fighter}
 * @preview ![jet-fighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jet-fighter.svg)
 */
const JetFighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 48l0 144 192 0L272 48l-80 0zm0 272l0 144 80 0L384 320l-192 0z" />
        <path d="M184 0L296 0l24 0 0 48-24 0L184 48l-24 0 0-48 24 0zm0 464l112 0 24 0 0 48-24 0-112 0-24 0 0-48 24 0zM32 224l0-96 64 0 64 64 32 0 320 0 128 48 0 32L512 320l-320 0-32 0L96 384l-64 0 0-96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm48 16l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default JetFighter;