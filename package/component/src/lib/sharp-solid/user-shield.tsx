
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=sharp-solid user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zm96.1 304c2.3 74.7 36.7 158.5 106 208L0 512 64 304l256.1 0zm271.2 8.4L496 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148zM496 512c-96-32-144-130.2-144-216l0-16.2L496 224l144 55.8 0 16.2c0 85.8-48 184-144 216z" />
    </Icon>
);

export default UserShield;