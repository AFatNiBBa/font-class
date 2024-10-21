
import { Icon } from "../../index";

/**
 * A component that renders the `satellite` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/satellite?s=sharp-thin satellite}
 * @preview ![satellite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/satellite.svg)
 */
const Satellite: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 400l11.3-11.3 89.4-89.4L512 288l-11.3-11.3L432 208l52.7-52.7L496 144l-11.3-11.3L379.3 27.3 368 16 356.7 27.3 174.8 209.2c5.8 1.5 11.5 3.4 17.1 5.5l176-176L473.4 144l-176 176c2.1 5.6 4 11.4 5.5 17.1L320 320l68.7 68.7L400 400zm-68.7-91.3l89.4-89.4L489.4 288 400 377.4l-68.7-68.7zM192 192l11.3-11.3L134.6 112 224 22.6l68.7 68.7L304 80 235.3 11.3 224 0 212.7 11.3l-89.4 89.4L112 112l11.3 11.3L192 192zm64 320l7.7-8.7c1-1.1 1.9-2.2 2.9-3.3C326.7 428.4 322.4 322.4 256 256s-172.4-70.7-243.9-10.6c-1.1 .9-2.2 1.9-3.3 2.9L0 256l11.3 11.3 111 111-20.3 20.3C95.7 394.4 88.2 392 80 392c-22.1 0-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40c0-8.2-2.4-15.7-6.6-22.1l20.3-20.3 111 111L256 512zm-.8-23.4L23.4 256.8c65.2-53.9 161.1-49.7 221.3 10.5s64.4 156.1 10.5 221.3zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Satellite;