
import { Icon } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=regular user-clock}
 * @preview ![user-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-clock.svg)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM49.3 464l299.2 0c12.3 18.8 28 35.1 46.3 48L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l45.7 0 45.7 0c20.6 0 40.4 3.5 58.8 9.9c-4.9 15.3-7.8 31.4-8.4 48.2c-15.5-6.5-32.5-10.1-50.4-10.1l-91.4 0c-65.7 0-120.1 48.7-129 112zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default UserClock;