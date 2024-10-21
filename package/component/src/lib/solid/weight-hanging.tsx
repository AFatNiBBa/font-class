
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=solid weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-45.5 0z" />
    </Icon>
);

export default WeightHanging;