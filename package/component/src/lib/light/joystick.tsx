
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=light joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 112a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm32 0c0 56.4-41.7 103.1-96 110.9l0 97.1-32 0 0-97.1c-54.3-7.8-96-54.4-96-110.9C112 50.1 162.1 0 224 0s112 50.1 112 112zM64 304c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zM416 416c0-17.7-14.3-32-32-32L64 384c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-32zM64 352l320 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM208 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Joystick;