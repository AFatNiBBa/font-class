
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=thin face-smile-plus}
 * @preview ![face-smile-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-smile-plus.svg)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M552 8l0 80 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-80c0-4.4 3.6-8 8-8s8 3.6 8 8zM432 288A208 208 0 1 0 16 288a208 208 0 1 0 416 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zm144.4-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM119.4 341c4.9 12.3 16.2 31.2 33.9 47c17.6 15.7 41.1 28 70.7 28s53.1-12.3 70.7-28c17.7-15.8 29-34.7 33.9-47c1.6-4.1 6.3-6.1 10.4-4.5s6.1 6.3 4.5 10.4c-5.8 14.4-18.4 35.4-38.1 53c-19.8 17.7-46.9 32-81.3 32s-61.6-14.4-81.3-32c-19.7-17.6-32.3-38.6-38.1-53c-1.6-4.1 .4-8.8 4.5-10.4s8.8 .4 10.4 4.5z" />
    </Icon>
);

export default FaceSmilePlus;