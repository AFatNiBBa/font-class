
import { Icon } from "../../index";

/**
 * A component that renders the `taco` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=solid taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path d="M274.8 38.4l44.1 34.2c5.6 4.4 12.6 6.6 19.7 6.4l55.8-1.7c14-.4 26.5 8.6 30.4 22.1l15.6 53.6c2 6.8 6.3 12.8 12.2 16.8L498.6 201c11.6 7.9 16.3 22.5 11.6 35.7l-17.1 47.7C441.1 209.2 354.3 160 256 160s-185.1 49.2-237.1 124.4L1.8 236.7c-4.7-13.1 0-27.8 11.6-35.7l46.1-31.4c5.9-4 10.2-9.9 12.2-16.8L87.3 99.3c3.9-13.4 16.4-22.5 30.4-22.1L173.4 79c7.1 .2 14.1-2 19.7-6.4l44.1-34.2c11-8.6 26.5-8.6 37.5 0zM512 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32C0 306.6 114.6 192 256 192s256 114.6 256 256zM112 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Taco;