
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=light camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 448l448 0c17.7 0 32-14.3 32-32l0-44.6c0-6.3-1.9-12.5-5.4-17.8l-1.1-1.6L38.5 352l-1.1 1.6c-3.5 5.3-5.4 11.4-5.4 17.8L32 416c0 17.7 14.3 32 32 32zM516.2 320l-28.1-42.2c-5.3-7.9-8.1-17.1-8.1-26.6L480 96c0-17.7-14.3-32-32-32L128 64c-17.7 0-32 14.3-32 32l0 155.2c0 9.5-2.8 18.7-8.1 26.6L59.8 320l456.4 0zM512 480L64 480c-35.3 0-64-28.7-64-64l0-44.6c0-12.6 3.7-25 10.7-35.5L61.3 260c1.8-2.6 2.7-5.7 2.7-8.9L64 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 155.2c0 3.2 .9 6.2 2.7 8.9l50.6 75.8c7 10.5 10.7 22.9 10.7 35.5l0 44.6c0 35.3-28.7 64-64 64zM416 152a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-128-8a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm80 48a80 80 0 1 1 -160 0 80 80 0 1 1 160 0zM112 384l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default CameraPolaroid;