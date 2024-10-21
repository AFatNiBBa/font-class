
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=sharp-regular face-smile-plus}
 * @preview ![face-smile-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-smile-plus.svg)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M568 0l0 24 0 48 48 0 24 0 0 48-24 0-48 0 0 48 0 24-48 0 0-24 0-48-48 0-24 0 0-48 24 0 48 0 0-48 0-24 48 0zM400 288A176 176 0 1 0 48 288a176 176 0 1 0 352 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zm144.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 368c31.1 0 58.9-13.6 78-35.2l36 31.8C310.2 396.1 269.4 416 224 416s-86.2-19.9-114-51.5l36-31.8c19.1 21.6 46.9 35.2 78 35.2z" />
    </Icon>
);

export default FaceSmilePlus;