
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-to-portal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-to-portal?s=duotone person-to-portal}
 * @preview ![person-to-portal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-to-portal.svg)
 */
const PersonToPortal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352.7 222.4c3.2 1 6.5 1.6 10 1.6l21.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-21.3 0c-.8 0-1.7 0-2.5 0c-.9 0-1.7-.1-2.5-.1c-1.7-.1-3.4-.2-5-.4C357.4 414 391.1 512 432 512c44.2 0 80-114.6 80-256S476.2 0 432 0c-40.6 0-74.2 96.9-79.3 222.4z" />
        <path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />
    </Icon>
);

export default PersonToPortal;