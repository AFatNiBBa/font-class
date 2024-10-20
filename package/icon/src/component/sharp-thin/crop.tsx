
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=sharp-thin crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 0l0 8 0 380.7L388.7 112 160 112l0-16 244.7 0 85.7-85.7L496 4.7 507.3 16l-5.7 5.7L416 107.3 416 400l88 0 8 0 0 16-8 0-88 0 0 88 0 8-16 0 0-8 0-380.7L123.3 400 352 400l0 16-248 0-8 0 0-8 0-296L8 112l-8 0L0 96l8 0 88 0L96 8l0-8 16 0z" />
    </Icon>
);

export default Crop;