
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=regular lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 128c0-44.2 35.8-80 80-80s80 35.8 80 80l0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72C560 57.3 502.7 0 432 0S304 57.3 304 128l0 64L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-64zM64 240l320 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default LockOpen;