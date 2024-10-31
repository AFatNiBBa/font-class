
import { Icon } from "../../index";

/**
 * A component that renders the `face-angry` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-angry?s=sharp-thin face-angry}
 * @preview ![face-angry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-angry.svg)
 */
const FaceAngry: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm71.4-108.7l11.9-10.7-5.4-5.9C318.9 370 292.9 352 256 352s-62.9 18-77.9 34.6l-5.4 5.9 11.9 10.7 5.4-5.9C202.7 383.1 224.7 368 256 368s53.3 15.1 66.1 29.4l5.4 5.9zM176.4 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM130.5 168.4l-7.6-2.5-5.1 15.2 7.6 2.5 96 32 7.6 2.5 5.1-15.2-7.6-2.5-96-32zm256 15.2l7.6-2.5-5.1-15.2-7.6 2.5-96 32-7.6 2.5 5.1 15.2 7.6-2.5 96-32z" />
    </Icon>
);

export default FaceAngry;