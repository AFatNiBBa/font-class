
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right-and-down-left-from-center` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-and-down-left-from-center?s=duotone up-right-and-down-left-from-center}
 * @preview ![up-right-and-down-left-from-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-right-and-down-left-from-center.svg)
 */
const UpRightAndDownLeftFromCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 344L0 488c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-39-39 87-87c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17l-32-32c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7l-87 87L41 327c-6.9-6.9-17.2-8.9-26.2-5.2S0 334.3 0 344z" />
        <path d="M488 0L344 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39-87 87c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l87-87 39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default UpRightAndDownLeftFromCenter;