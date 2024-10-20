
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=duotone left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 208c0 32 0 64 0 96l96 0 0 56c0 9.5 5.7 18.2 14.4 22c3.1 1.3 6.3 2 9.6 2c5.9 0 11.8-2.2 16.3-6.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 56-96 0z" />
        <path d="M0 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 56 96 0 0 96-96 0 0 56c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104C2.8 269 0 262.7 0 256z" />
    </Icon>
);

export default LeftRight;