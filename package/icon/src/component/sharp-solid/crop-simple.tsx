
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=sharp-solid crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32l0-32L64 0l0 32 0 32L32 64 0 64l0 64 32 0 32 0 0 288 0 32 32 0 224 0 32 0 0-64-32 0-192 0 0-256 0-64 0-32zM384 480l0 32 64 0 0-32 0-32 32 0 32 0 0-64-32 0-32 0 0-288 0-32-32 0L160 64l0 64 224 0 0 256 0 64 0 32z" />
    </Icon>
);

export default CropSimple;