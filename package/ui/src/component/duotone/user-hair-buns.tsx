
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-hair-buns` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair-buns?s=duotone user-hair-buns}
 * @preview ![user-hair-buns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-hair-buns.svg)
 */
const UserHairBuns: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 112l0 64c0 5.5 .5 10.8 1.3 16c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80c.9-5.2 1.3-10.5 1.3-16l0-64-32 0c-26.2 0-49.4-12.6-64-32c-14.6 19.4-37.8 32-64 32l-32 0z" />
        <path d="M109.8 70.1C131 28.5 174.1 0 224 0s93 28.5 114.2 70.1c6.8-3.9 14.7-6.1 23.1-6.1c25.8 0 46.7 20.9 46.7 46.7l0 25.3c0 30.9-25.1 56-56 56l-33.3 0c.9-5.2 1.3-10.5 1.3-16l0-64-32 0c-26.2 0-49.4-12.6-64-32c-14.6 19.4-37.8 32-64 32l-32 0 0 64c0 5.5 .5 10.8 1.3 16L96 192c-30.9 0-56-25.1-56-56l0-25.3C40 84.9 60.9 64 86.7 64c8.4 0 16.2 2.2 23.1 6.1zM0 481.3C0 392.2 72.2 320 161.3 320l125.4 0C375.8 320 448 392.2 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3z" />
    </Icon>
);

export default UserHairBuns;