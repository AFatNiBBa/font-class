
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-up?s=regular mars-stroke-up}
 * @preview ![mars-stroke-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mars-stroke-up.svg)
 */
const MarsStrokeUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M175.6 5.8c-9-7.7-22.3-7.7-31.2 0l-56 48c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l16.4-14 0 51.8-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 17.8C59 205.4 0 271.8 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-80.2-59-146.6-136-158.2l0-17.8 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-51.8 16.4 14c10.1 8.6 25.2 7.5 33.8-2.6s7.5-25.2-2.6-33.8l-56-48zM160 240a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" />
    </Icon>
);

export default MarsStrokeUp;