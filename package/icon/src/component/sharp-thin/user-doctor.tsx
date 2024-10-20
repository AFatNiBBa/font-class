
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=sharp-thin user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM21.7 496l404.7 0L372.2 320 312 320l0 48.7c22.7 3.8 40 23.6 40 47.3l0 40 0 8-8 0-16 0-8 0 0-16 8 0 8 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32 8 0 8 0 0 16-8 0-16 0-8 0 0-8 0-40c0-23.8 17.3-43.5 40-47.3l0-48.7-144 0 0 48.7c22.7 3.8 40 23.6 40 47.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-23.8 17.3-43.5 40-47.3l0-48.7-60.2 0L21.7 496zM144 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM64 304l320 0 59.1 192 4.9 16-16.7 0L16.7 512 0 512l4.9-16L64 304z" />
    </Icon>
);

export default UserDoctor;