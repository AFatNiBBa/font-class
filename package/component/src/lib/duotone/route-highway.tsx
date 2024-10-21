
import { Icon, generic } from "../../index";

/**
 * A component that renders the `route-highway` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route-highway?s=duotone route-highway}
 * @preview ![route-highway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/route-highway.svg)
 */
const RouteHighway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 323c0 49.5 28 94.8 72.2 116.9l137.4 68.7c4.5 2.3 9.4 3.4 14.3 3.4s9.8-1.1 14.3-3.4l137.4-68.7C420 417.8 448 372.5 448 323c0-16.6-3.2-33.1-9.3-48.5l-14.3-35.7c-5.5-13.9-8.4-28.6-8.4-43.6c0-1.1 0-2.2 0-3.2L32 192c0 1.1 0 2.2 0 3.2c0 14.9-2.8 29.7-8.4 43.6L9.3 274.5C3.2 289.9 0 306.4 0 323z" />
        <path d="M240.5 4.6c-10.1-6.1-22.8-6.1-32.9 0l-4.7 2.8c-37.5 22.5-84 24.3-123.1 4.7l-1.4-.7c-15.2-7.6-33.7-2-42.1 12.7l-32 56c-5.3 9.3-5.6 20.6-.8 30.2l16.2 32.5C27.3 158.1 31.5 174.9 32 192L416 192c.5-17.1 4.7-33.9 12.3-49.2l16.2-32.5c4.8-9.6 4.5-20.9-.8-30.2l-32-56c-8.4-14.7-26.9-20.3-42.1-12.7l-1.4 .7c-39.1 19.6-85.6 17.8-123.1-4.7l-4.7-2.8z" />
    </Icon>
);

export default RouteHighway;