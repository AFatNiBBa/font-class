
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane?s=duotone plane}
 * @preview ![plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane.svg)
 */
const Plane: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M165.2 16c0 1.5 .2 2.9 .6 4.4l49 171.6 150.9 0L265.2 16.1C259.5 6.2 248.9 0 237.4 0L181.2 0c-9.1 0-16 7.4-16 16zm0 480.1c0 8.5 6.9 16 16 16l56.2 0c11.5 0 22.1-6.2 27.8-16.1L365.7 320l-150.9 0-49 171.6c-.4 1.5-.6 3-.6 4.4z" />
        <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l370.3 0z" />
    </Icon>
);

export default Plane;