
import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=sharp-thin user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM75.8 320L21.7 496l300.4 0-2.5 16L16.7 512 0 512l4.9-16L64 304l320 0 12.6 40.9-12.8 12.8L372.2 320 75.8 320zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zm466.9 95.9l11.3 11.3 54.5 54.5L640 300.9l-11.3 11.3L443.3 497.6l-74.7 11.6L352 511.9l2.6-16.6 11.6-74.7L562.9 223.9zM381.2 428.2l-10 64.5 64.5-10L573.5 344.8 519 290.4 381.2 428.2zM617.4 300.9l-54.5-54.5L530.4 279l54.5 54.5 32.5-32.5z" />
    </Icon>
);

export default UserPen;