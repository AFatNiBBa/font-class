
import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=sharp-thin camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 224A208 208 0 1 0 16 224a208 208 0 1 0 416 0zm16 0c0 76.4-38.3 143.9-96.7 184.3L419.6 496 432 512l-20.3 0L36.3 512 16 512l12.4-16 68.2-87.7C38.3 367.9 0 300.4 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM224 448c-41.6 0-80.5-11.3-113.8-31L48.7 496l350.6 0-61.5-79c-33.4 19.7-72.3 31-113.8 31zM352 224A128 128 0 1 0 96 224a128 128 0 1 0 256 0zM80 224a144 144 0 1 1 288 0A144 144 0 1 1 80 224zm88 0l-16 0c0-39.8 32.2-72 72-72l0 16c-30.9 0-56 25.1-56 56z" />
    </Icon>
);

export default CameraWeb;