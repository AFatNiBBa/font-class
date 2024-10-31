
import { Icon } from "../../index";

/**
 * A component that renders the `layer-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-plus?s=solid layer-plus}
 * @preview ![layer-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/layer-plus.svg)
 */
const LayerPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 0c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zM311.5 133.2c-14.9-6.9-32.1-6.9-47 0L45.9 234.2C37.4 238.1 32 246.6 32 256s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-218.6-101zm13.4 274.7c-23.4 10.8-50.4 10.8-73.8 0l-152-70.2L45.9 362.2C37.4 366.1 32 374.6 32 384s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-53.2-24.6-152 70.2z" />
    </Icon>
);

export default LayerPlus;