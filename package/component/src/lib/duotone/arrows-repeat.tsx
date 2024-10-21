
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-repeat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-repeat?s=duotone arrows-repeat}
 * @preview ![arrows-repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-repeat.svg)
 */
const ArrowsRepeat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M73.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L173.3 416l173.6 0c74.2 0 140.1-47.5 163.6-117.9c1.1-3.4 1.7-6.8 1.7-10.1c0-13.4-8.5-25.9-21.9-30.4c-3.4-1.1-6.8-1.7-10.1-1.7c-13.4 0-25.9 8.5-30.4 21.9C434.9 322.1 393.5 352 346.8 352l-173.6 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96z" />
        <path d="M21.9 254.4C5.1 248.8-3.9 230.6 1.6 213.9C25.1 143.5 91 96 165.2 96l173.6 0L297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L338.7 160l-173.6 0c-46.7 0-88.1 29.9-102.8 74.1c-5.6 16.8-23.7 25.8-40.5 20.2z" />
    </Icon>
);

export default ArrowsRepeat;