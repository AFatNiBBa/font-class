
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-nurse-hair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse-hair?s=duotone user-nurse-hair}
 * @preview ![user-nurse-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-nurse-hair.svg)
 */
const UserNurseHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96.1 170.7c3.7 1.7 7.5 3.1 11.5 4c2 .4 4 .8 6.1 1c1 .1 2 .2 3.2 .3c.9 0 1.9 .1 3.1 .1c24 0 48 0 72 0c34.6 0 65-18.3 81.9-45.8C285.2 148.1 305.2 160 328 160c8 0 15.9 0 24 0c0 1.5 0 2.9 0 4.4C352 232.7 296.7 288 228.4 288l-8.8 0c-66.2 0-120.2-52-123.5-117.3z" />
        <path d="M96 96l0 32 0 42.6c7.3 3.5 15.4 5.4 24 5.4l72 0c34.6 0 65-18.3 81.9-45.8C285.2 148.1 305.2 160 328 160l24 0 0-32 0-32 0-25.8c0-13.3-8.3-25.3-20.8-30l-96-36c-7.2-2.7-15.2-2.7-22.5 0l-96 36C104.3 44.9 96 56.8 96 70.2L96 96zm45.3 240.2c-7.6-8.1-18.9-11.9-29.4-8.5C47 348.5 0 409.4 0 481.3c0 17 13.8 30.7 30.7 30.7l386.6 0c17 0 30.7-13.8 30.7-30.7c0-71.9-47-132.7-111.9-153.6c-10.5-3.4-21.8 .4-29.4 8.5l-71 75.5c-6.3 6.7-17 6.7-23.3 0l-71-75.5zM208 48c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 16 0c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0 0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8l16 0 0-16z" />
    </Icon>
);

export default UserNurseHair;