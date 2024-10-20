
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pager` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=duotone pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM56 344c0 13.3 10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-13.3 0-24 10.7-24 24zm8-184l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM192 344c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" />
        <path d="M64 160c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160z" />
    </Icon>
);

export default Pager;