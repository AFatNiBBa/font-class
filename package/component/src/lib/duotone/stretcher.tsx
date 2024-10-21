
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stretcher` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=duotone stretcher}
 * @preview ![stretcher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stretcher.svg)
 */
const Stretcher: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64s64-28.7 64-64c0-5.3-.7-10.5-1.9-15.5L368 396.2l49.9 36.3c-1.2 5-1.9 10.2-1.9 15.5c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-12.4 0-24 3.5-33.9 9.7l-37.3-27.1 108-78.5-81.6 0L368 336.9 300.8 288l-81.6 0 108 78.5-37.3 27.1c-9.8-6.1-21.4-9.7-33.9-9.7c-35.3 0-64 28.7-64 64zm80 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm224 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M15.2 77C34.5 58.9 64.9 59.8 83 79.2L188.8 192 592 192c26.5 0 48 21.5 48 48s-21.5 48-48 48l-410.1 0c-22.1 0-43.2-9.2-58.4-25.3L13 144.8C-5.1 125.5-4.2 95.1 15.2 77z" />
    </Icon>
);

export default Stretcher;