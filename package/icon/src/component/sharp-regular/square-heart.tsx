
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=sharp-regular square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM115.3 271.2c-13.4-13.4-20.9-31.5-20.9-50.4l0-3.2c0-37.6 30.5-68.1 68.1-68.1c20.7 0 40.2 9.4 53.2 25.6l8.4 10.4 8.4-10.4c12.9-16.1 32.5-25.6 53.2-25.6c37.6 0 68.1 30.5 68.1 68.1l0 3.2c0 18.9-7.5 37-20.9 50.4l-22.3 22.3s0 0 0 0L224 379.9s0 0 0 0s0 0 0 0l-86.4-86.4s0 0 0 0l-22.3-22.3z" />
    </Icon>
);

export default SquareHeart;