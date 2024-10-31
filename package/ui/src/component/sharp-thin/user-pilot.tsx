
import { Icon } from "../../index";

/**
 * A component that renders the `user-pilot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot?s=sharp-thin user-pilot}
 * @preview ![user-pilot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-pilot.svg)
 */
const UserPilot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80L368 99.2l0 44.8c-16 10.7-67.2 32-144 32s-128-21.3-144-32l0-44.8L48 80l0-32L224 0 400 48l0 32zM352 99.2l0-9.1 7.8-4.7L384 70.9l0-10.7L224 16.6 64 60.2l0 10.7L88.2 85.5 96 90.1l0 9.1 0 35.6c19.2 9.7 63.8 25.2 128 25.2s108.8-15.5 128-25.2l0-35.6zM96.3 183.3c4.8 2.3 10.1 4.5 15.7 6.7c0 .7 0 1.3 0 2c0 61.9 50.1 112 112 112s112-50.1 112-112c0-.7 0-1.3 0-2c5.7-2.2 10.9-4.4 15.7-6.7c.2 2.9 .3 5.8 .3 8.7c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-2.9 .1-5.8 .3-8.7zM216 430.4l-2.9-2.6L148.4 368l-88.5 0L21.5 496 216 496l0-65.6zm16 0l0 65.6 194.5 0L388.1 368l-88.5 0-64.7 59.8-2.9 2.6zM224 416l69.3-64L400 352l43.2 144 4.8 16-16.7 0L224 512 16.7 512 0 512l4.8-16L48 352l106.7 0L224 416zm96 16l8 0 48 0 8 0 0 16-8 0-48 0-8 0 0-16zM163.6 64.8L224 95.1l60.4-30.2 7.2-3.6 7.2 14.3-7.2 3.6-64 32-3.6 1.8-3.6-1.8-64-32-7.2-3.6 7.2-14.3 7.2 3.6z" />
    </Icon>
);

export default UserPilot;