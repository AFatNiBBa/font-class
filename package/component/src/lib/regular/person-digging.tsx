
import { Icon } from "../../index";

/**
 * A component that renders the `person-digging` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-digging?s=regular person-digging}
 * @preview ![person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-digging.svg)
 */
const PersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM440.8 288c8.2 .3 15.7 4.7 19.8 11.8l104 176c4.4 7.4 4.5 16.6 .2 24.1s-12.2 12.1-20.8 12.1l-256 0c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.6l16-48c3.3-9.8 12.4-16.4 22.8-16.4l35.4 0 20.3-29.5L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4s19.1-18 31.4-12.9L61 210.1l19.8-36.2C96.2 145.6 125.8 128 158 128l3.8 0c52.3 0 98.5 33.8 114.4 83.6l32.3 101.6 79 32.9 32.8-47.7c4.6-6.8 12.4-10.7 20.6-10.4zm-190.4 1l-20-62.8c-9.5-29.9-37.3-50.2-68.6-50.2l-3.8 0c-14.6 0-28.1 8-35.1 20.8l-17.3 31.8L250.4 289zm188.1 67.6l-66.7 97L364.6 464l137.3 0L438.5 356.6zM81.4 301.1l128 54.4c8.9 3.8 14.6 12.5 14.6 22.1L224 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-94.5L87.5 355.9 47 494.7c-3.7 12.7-17 20-29.8 16.3S-2.7 494 1 481.3L49 316.5l7.6-25.9 24.9 10.6z" />
    </Icon>
);

export default PersonDigging;