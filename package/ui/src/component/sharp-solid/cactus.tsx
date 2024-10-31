
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=sharp-solid cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96c0-53 43-96 96-96s96 43 96 96l0 256 64 0 0-80 0-48 96 0 0 48 0 128 0 48-48 0-112 0 0 64-192 0 0-192L48 320 0 320l0-48L0 144 0 96l96 0 0 48 0 80 64 0 0-128zm80 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;