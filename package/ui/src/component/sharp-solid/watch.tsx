
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=sharp-solid watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 0l0 72.2C283.7 46.8 239.6 32 192 32s-91.7 14.8-128 40.2L64 0 320 0zm0 439.8l0 72.2L64 512l0-72.2c36.3 25.3 80.4 40.2 128 40.2s91.7-14.8 128-40.2zM0 256a192 192 0 1 1 384 0A192 192 0 1 1 0 256zm216-80l0-24-48 0 0 24 0 80 0 12.8 10.7 7.1 48 32 20 13.3 26.6-39.9-20-13.3L216 243.2l0-67.2z" />
    </Icon>
);

export default Watch;