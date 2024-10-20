
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=regular circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 53.6C116.3 75.2 48 157.7 48 256s68.3 180.8 160 202.4l0-404.9zM224.1 2C241.6-.2 256 14.3 256 32l0 448c0 17.7-14.4 32.2-31.9 30C97.8 494.3 0 386.6 0 256S97.8 17.7 224.1 2z" />
    </Icon>
);

export default CircleHalf;