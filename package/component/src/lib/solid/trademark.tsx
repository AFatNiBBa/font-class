
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=solid trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-13.8-8.8-26-21.9-30.4s-27.5 .1-35.7 11.2L464 266.7 345.6 108.8zM0 128c0 17.7 14.3 32 32 32l64 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128z" />
    </Icon>
);

export default Trademark;