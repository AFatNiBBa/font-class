
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=sharp-regular user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM65 464L99.5 352l226.4 0c-3.4-16.1-5.3-32.3-5.7-48L64 304 14.8 464 0 512l50.2 0 347.6 0 28.3 0c-19.2-13.7-35.7-30-49.5-48L65 464zM591.3 312.4c-5.2 61-38.8 121.7-95.3 148l0-184.9 95.3 36.9zM496 512c96-32 144-130.2 144-216l0-16.2L496 224 352 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default UserShield;