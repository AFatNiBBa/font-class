
import { Icon } from "../../index";

/**
 * A component that renders the `bottle-baby` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-baby?s=sharp-solid bottle-baby}
 * @preview ![bottle-baby](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bottle-baby.svg)
 */
const BottleBaby: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96l0-32 32-16 0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 32 16 0 32 32 0 0 64-192 0 0-64 32 0zm32 176l-108.4 0c4.5-19.6 13-38.1 25.2-54.4L160 192l192 0 19.2 25.6C389.9 242.5 400 272.8 400 304l0 208-288 0 0-80 112 0 0-48-112 0 0-64 112 0 0-48z" />
    </Icon>
);

export default BottleBaby;