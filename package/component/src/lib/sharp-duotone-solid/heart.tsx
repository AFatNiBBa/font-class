
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=sharp-duotone-solid heart}
 * @preview ![heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heart.svg)
 */
const Heart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 288L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 256 480 64 288z" />
    </Icon>
);

export default Heart;