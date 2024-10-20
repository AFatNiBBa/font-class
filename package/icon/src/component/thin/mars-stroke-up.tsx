
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-up?s=thin mars-stroke-up}
 * @preview ![mars-stroke-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mars-stroke-up.svg)
 */
const MarsStrokeUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M165.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L152 27.3 152 128l-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 48.2C67.4 196.4 0 266.3 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.7-67.4-155.6-152-159.8l0-48.2 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-100.7 50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64zM160 496a144 144 0 1 1 0-288 144 144 0 1 1 0 288z" />
    </Icon>
);

export default MarsStrokeUp;