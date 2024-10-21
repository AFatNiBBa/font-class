
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=duotone brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 48L0 256l0 22.4L0 288l9.6 0 364.8 0 9.6 0 0-9.6 0-22.4 0-208c0-26.5-21.5-48-48-48L230.5 0c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6c-1.5-3.6-5-6-8.9-6l-19 0c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6L48 0C21.5 0 0 21.5 0 48z" />
        <path d="M0 288l384 0 0 32c0 35.3-28.7 64-64 64l-64 0 0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64-64 0c-35.3 0-64-28.7-64-64l0-32zM192 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Brush;