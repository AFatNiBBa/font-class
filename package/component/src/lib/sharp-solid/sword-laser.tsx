
import { Icon } from "../../index";

/**
 * A component that renders the `sword-laser` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword-laser?s=sharp-solid sword-laser}
 * @preview ![sword-laser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sword-laser.svg)
 */
const SwordLaser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 0L230 226.2 285.8 282 512 32 480 0zM184 225.4L161.4 248 264 350.6 286.6 328l-11.3-11.3-80-80L184 225.4zm-22.6 45.2l-23.7 23.7 80 80 23.7-23.7-80-80zm-35 35l-20.7 20.7 80 80 20.7-20.7-80-80zM80 336L0 416l0 48 32 32 16 16 48 0 80-80L80 336z" />
    </Icon>
);

export default SwordLaser;