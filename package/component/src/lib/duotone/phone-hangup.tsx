
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=duotone phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M20.2 285.5c75.5-34 139.6-51.8 203.8-59.8l0 32.3c-59.6 7.9-119.7 24.8-190.8 56.8c-4.3-9.7-8.7-19.5-13-29.2zM416 225.6c32.1 4 64.1 10.5 97.6 20.2c16.7 4.8 33.8 10.5 51.5 17.1c8.8 3.3 17.7 6.8 26.7 10.5s18.3 7.7 27.6 11.9c.1 0 .2 .1 .3 .1c-4.3 9.7-8.7 19.5-13 29.2c-71.2-32.1-131.2-49-190.8-56.8l0-17.9 0-14.4z" />
        <path d="M20.2 285.5l-8.5-19.2c-7.2-16.2-5.1-35.1 7.4-47.7C69.2 168.1 175.8 96 320 96s250.8 72.1 300.9 122.6c12.5 12.6 14.6 31.5 7.4 47.7l-8.5 19.2C507.2 234.7 420 220.1 320 220.1s-187.2 14.7-299.8 65.4zm13 29.2c71.2-32.1 131.2-49 190.8-56.8l0 67.9c0 15.3-10.8 28.4-25.7 31.4L89.1 379c-14.7 2.9-29.4-4.7-35.5-18.4L33.2 314.7zM416 257.9c59.6 7.9 119.7 24.8 190.8 56.8l-20.4 45.9c-6.1 13.7-20.8 21.3-35.5 18.4L441.7 357.1c-15-3-25.7-16.1-25.7-31.4l0-67.9z" />
    </Icon>
);

export default PhoneHangup;