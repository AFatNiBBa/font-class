
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-regular box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M200 160l0-80L95.2 80 59.6 160 200 160zm188.4 0L352.8 80 248 80l0 80 140.4 0zM48 208l0 224 352 0 0-224L48 208zM64 32l320 0 64 144 0 256 0 48-48 0L48 480 0 480l0-48L0 176 64 32zM224 400l-84.8-74c-22.1-19.3-23.3-53.3-2.5-74.1c19.8-19.8 51.9-19.8 71.8 0L224 267.4l15.5-15.5c19.8-19.8 51.9-19.8 71.8 0c20.8 20.8 19.6 54.8-2.5 74.1L224 400z" />
    </Icon>
);

export default BoxHeart;