
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=duotone reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 12.9 7.8 24.6 19.8 29.6c4 1.6 8.1 2.4 12.2 2.4c8.3 0 16.5-3.3 22.6-9.4l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S0 115.1 0 128zM329.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c6.1 6.1 14.3 9.4 22.6 9.4c4.1 0 8.3-.8 12.2-2.4c12-5 19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128z" />
        <path d="M256 0c13.3 0 24 10.7 24 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ReflectHorizontal;