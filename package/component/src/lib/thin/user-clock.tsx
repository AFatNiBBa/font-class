
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=thin user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM178.3 320l91.4 0c19.1 0 37.5 3.3 54.5 9.4c1.2-5.3 2.6-10.4 4.2-15.5c-18.4-6.4-38.2-9.9-58.8-9.9l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l365.1 0c-6.9-4.9-13.4-10.2-19.6-16L29.7 496c-7.6 0-13.7-6.1-13.7-13.7C16 392.7 88.7 320 178.3 320zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-224c-4.4 0-8 3.6-8 8l0 72c0 4.4 3.6 8 8 8l56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0 0-64c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default UserClock;