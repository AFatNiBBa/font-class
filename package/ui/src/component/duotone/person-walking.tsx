
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-walking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking?s=duotone person-walking}
 * @preview ![person-walking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-walking.svg)
 */
const PersonWalking: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l27.7-69.2c-10.1-11-20.2-22.1-30.3-33.1c-.9-1-1.7-1.9-2.5-2.9c-.8-1-1.6-2.1-2.4-3.1c-1.5-2.1-2.9-4.3-4.1-6.5c-2.5-4.5-4.3-9.2-5.7-14.1L68.7 398 9.4 457.4C3.1 463.6 0 471.8 0 480z" />
        <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5z" />
    </Icon>
);

export default PersonWalking;