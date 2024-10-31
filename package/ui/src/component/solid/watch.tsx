
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=solid watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M112 0L272 0c26.5 0 48 21.5 48 48l0 24.2C283.7 46.8 239.6 32 192 32s-91.7 14.8-128 40.2L64 48C64 21.5 85.5 0 112 0zM64 464l0-24.2c36.3 25.3 80.4 40.2 128 40.2s91.7-14.8 128-40.2l0 24.2c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48zM0 256a192 192 0 1 1 384 0A192 192 0 1 1 0 256zM192 152c-13.3 0-24 10.7-24 24l0 80c0 8 4 15.5 10.7 20l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L216 243.2l0-67.2c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default Watch;