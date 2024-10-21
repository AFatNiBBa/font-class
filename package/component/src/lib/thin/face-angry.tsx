
import { Icon } from "../../index";

/**
 * A component that renders the `face-angry` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-angry?s=thin face-angry}
 * @preview ![face-angry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-angry.svg)
 */
const FaceAngry: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm77.4-114.1c3.3-3 3.6-8 .6-11.3C318.9 370 292.9 352 256 352s-62.9 18-77.9 34.6c-3 3.3-2.7 8.3 .6 11.3s8.3 2.7 11.3-.6C202.7 383.1 224.7 368 256 368s53.3 15.1 66.1 29.4c3 3.3 8 3.6 11.3 .6zM176.4 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM130.5 168.4c-4.2-1.4-8.7 .9-10.1 5.1s.9 8.7 5.1 10.1l96 32c4.2 1.4 8.7-.9 10.1-5.1s-.9-8.7-5.1-10.1l-96-32zm256 15.2c4.2-1.4 6.5-5.9 5.1-10.1s-5.9-6.5-10.1-5.1l-96 32c-4.2 1.4-6.5 5.9-5.1 10.1s5.9 6.5 10.1 5.1l96-32z" />
    </Icon>
);

export default FaceAngry;