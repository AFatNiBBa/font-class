
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-solid box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32l0 128L0 160 64 32l144 0zm32 0l144 0 64 128-208 0 0-128zM0 192l448 0 0 288L0 480 0 192zM224 432l88.6-88.6c20.5-20.5 20.5-53.8 0-74.3s-53.8-20.5-74.3 0L224 283.4l-14.3-14.3c-20.5-20.5-53.8-20.5-74.3 0s-20.5 53.8 0 74.3L224 432z" />
    </Icon>
);

export default BoxHeart;