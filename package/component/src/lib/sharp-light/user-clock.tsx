
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=sharp-light user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM87.6 336l235.3 0c2-11.1 5.1-21.8 9.1-32L64 304 9.8 480 0 512l33.5 0 361.3 0c-12.9-9.1-24.5-19.9-34.6-32L43.3 480 87.6 336zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM496 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-224l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default UserClock;