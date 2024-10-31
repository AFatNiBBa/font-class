
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=sharp-regular image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 35.8 0 80.8-110.2L184 263.4l19.4 26.4L232.8 330l83.1-127.1L336 172.1l20.1 30.7L485 400l43 0 0-288L48 112zm.6 336l-.6 0L0 448l0-48L0 112 0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0-11.6 0L472 448l-152.6 0L272 448l-72 0-44.4 0L96 448l-47.4 0zM160 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ImageLandscape;