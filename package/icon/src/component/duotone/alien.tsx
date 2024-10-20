
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alien` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=duotone alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224C0 359.3 148.8 471.7 194.7 503.2c8.6 5.9 18.9 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224zm64 13.7c0-7.6 6.1-13.7 13.7-13.7l32 0c45.4 0 82.3 36.8 82.3 82.3c0 7.6-6.1 13.7-13.7 13.7l-32 0C100.8 320 64 283.2 64 237.7zm192 68.6c0-45.4 36.8-82.3 82.3-82.3l32 0c7.6 0 13.7 6.1 13.7 13.7c0 45.4-36.8 82.3-82.3 82.3l-32 0c-7.6 0-13.7-6.1-13.7-13.7z" />
        <path d="M109.7 224c45.4 0 82.3 36.8 82.3 82.3c0 7.6-6.1 13.7-13.7 13.7l-32 0C100.8 320 64 283.2 64 237.7c0-7.6 6.1-13.7 13.7-13.7l32 0zm228.6 0l32 0c7.6 0 13.7 6.1 13.7 13.7c0 45.4-36.8 82.3-82.3 82.3l-32 0c-7.6 0-13.7-6.1-13.7-13.7c0-45.4 36.8-82.3 82.3-82.3z" />
    </Icon>
);

export default Alien;