
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=sharp-light user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM43.3 480L87.6 336 323 336c-1.6-10.8-2.6-21.5-2.9-32L64 304 9.8 480 0 512l33.5 0 381 0 11.6 0c-13.3-9.5-25.3-20.3-36.1-32L43.3 480zM607.9 301.6C606.1 367.4 572.8 437 512 470.3l0-205.8 95.9 37.1zm-223.8 0L480 264.5l0 205.8c-60.8-33.3-94.1-102.8-95.9-168.6zM496 512c96-32 144-130.2 144-216l0-16.2L496 224 352 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default UserShield;