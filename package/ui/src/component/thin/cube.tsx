
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=thin cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 19.3c-5.2-1.8-10.9-1.8-16.1 0L32 96c-4.9 1.7-9 5-11.8 9.1L256 199.4l235.8-94.3C489 101 484.9 97.7 480 96L264 19.3zM16 393.4c0 10.2 6.4 19.2 16 22.6l216 76.6s0 0 0 0l0-279.3L16 120.6l0 272.8zm248 99.3s0 0 0 0L480 416c9.6-3.4 16-12.5 16-22.6l0-272.8L264 213.4l0 279.3zM242.6 4.3c8.7-3.1 18.1-3.1 26.8 0l216 76.6c16 5.7 26.6 20.8 26.6 37.7l0 274.8c0 16.9-10.7 32-26.6 37.7l-216 76.6c-8.7 3.1-18.1 3.1-26.8 0l-216-76.6C10.7 425.4 0 410.3 0 393.4L0 118.6c0-16.9 10.7-32 26.6-37.7l216-76.6z" />
    </Icon>
);

export default Cube;