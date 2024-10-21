
import { Icon, generic } from "../../index";

/**
 * A component that renders the `icicles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=duotone icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M336 160c8.3-41.7 16.7-83.4 25-125.2c.4-1.9 .6-3.8 .6-5.7c0-14.4-10.5-26.4-24.3-28.7c1.6-.3 3.2-.4 4.8-.4L482.4 0C498.8 0 512 13.2 512 29.6c0 1.6-.1 3.3-.4 4.9L434.6 496.1c-1.5 9.2-9.5 15.9-18.8 15.9c-9.2 0-17.1-6.6-18.7-15.6L336 160z" />
        <path d="M75.8 304.8L1 35.7c-.7-2.5-1-5-1-7.5C0 12.6 12.6 0 28.2 0H332.5c16.1 0 29.1 13 29.1 29.1c0 1.9-.2 3.8-.6 5.7L336 160 307.2 303.9c-1.9 9.3-10.1 16.1-19.6 16.1c-9.2 0-17.2-6.2-19.4-15.1L240 192 210.6 368.2c-1.5 9.1-9.4 15.8-18.6 15.8s-17.1-6.7-18.6-15.8L144 192 115.9 304.3c-2.3 9.2-10.6 15.7-20.1 15.7c-9.3 0-17.5-6.2-20-15.2z" />
    </Icon>
);

export default Icicles;