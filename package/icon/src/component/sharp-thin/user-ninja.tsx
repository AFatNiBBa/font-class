
import { Icon } from "../../index";

/**
 * A component that renders the `user-ninja` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=sharp-thin user-ninja}
 * @preview ![user-ninja](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-ninja.svg)
 */
const UserNinja: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240c70.7 0 128-57.3 128-128S294.7 0 224 0C164.2 0 113.9 41.1 99.9 96.6L45.7 42.3 40 36.7 28.7 48l5.7 5.7L92.7 112 34.3 170.3 28.7 176 40 187.3l5.7-5.7L96 131.3C97.8 200.5 154.4 256 224 256zM144 80l0 16 0 32 0 16 16 0 128 0 16 0 0-16 0-32 0-16-16 0L160 80l-16 0zM132 320L262.1 496 21.7 496 75.8 320l56.1 0zm3.9-16L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304l-76 0-74 98.7L224 416l-10-13.3-71.6-95.4c0 0 0 0 0-.1L140 304l-3.9 0-.2 0zm97.4 126.2l3.5-4.6L316 320l56.2 0 54.2 176-144.4 0-3.5-4.8-45.1-61zM160 96l128 0 0 32-128 0 0-32z" />
    </Icon>
);

export default UserNinja;