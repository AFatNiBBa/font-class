
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sword-laser` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword-laser?s=sharp-duotone-solid sword-laser}
 * @preview ![sword-laser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sword-laser.svg)
 */
const SwordLaser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M206.3 247.7L480 0l32 32L264.3 305.7l-58.1-58.1z" />
        <path d="M195.3 236.7l80 80L286.6 328 264 350.6 161.4 248 184 225.4l11.3 11.3zm46.1 113.9l-23.7 23.7-80-80 23.7-23.7 80 80zm-35 35l-20.7 20.7-80-80 20.7-20.7 80 80zM0 416l80-80 96 96L96 512l-48 0L32 496 0 464l0-48z" />
    </Icon>
);

export default SwordLaser;