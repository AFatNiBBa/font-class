
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-up?s=light mars-stroke-up}
 * @preview ![mars-stroke-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mars-stroke-up.svg)
 */
const MarsStrokeUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M171.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 54.6l0 73.4-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32.8C63.1 200.8 0 269 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-83-63.1-151.2-144-159.2l0-32.8 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-73.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64zM160 480a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
    </Icon>
);

export default MarsStrokeUp;