
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=sharp-thin crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 8l0-8L96 0l0 8 0 88L8 96 0 96l0 16 8 0 88 0 0 296 0 8 8 0 248 0 0-16-240 0L112 8zM400 504l0 8 16 0 0-8 0-88 88 0 8 0 0-16-8 0-88 0 0-296 0-8-8 0L160 96l0 16 240 0 0 392z" />
    </Icon>
);

export default CropSimple;