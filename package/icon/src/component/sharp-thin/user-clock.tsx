
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=sharp-thin user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM75.8 320l250.8 0c1.5-5.4 3.3-10.8 5.4-16L64 304 4.9 496 0 512l16.7 0 378 0c-6.9-4.9-13.4-10.2-19.6-16L21.7 496 75.8 320zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm8-224l-16 0 0 8 0 72 0 8 8 0 56 0 8 0 0-16-8 0-48 0 0-64 0-8z" />
    </Icon>
);

export default UserClock;