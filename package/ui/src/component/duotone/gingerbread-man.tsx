
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gingerbread-man` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gingerbread-man?s=duotone gingerbread-man}
 * @preview ![gingerbread-man](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gingerbread-man.svg)
 */
const GingerbreadMan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 240c0 35.3 28.7 64 64 64l20.9 0c19 0 29.4 22.2 17.2 36.7L62.8 407c-22.6 27.2-19 67.5 8.2 90.1s67.5 19 90.1-8.2l45.6-54.8c9-10.7 25.5-10.7 34.4 0L286.8 489c22.6 27.2 63 30.8 90.1 8.2s30.8-63 8.2-90.1l-55.2-66.3c-12.2-14.6-1.8-36.7 17.2-36.7l20.9 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-64.4 0c-7.9 0-11.9-11.5-6.7-17.5C311.3 141.7 320 119.9 320 96c0-53-43-96-96-96s-96 43-96 96c0 23.9 8.7 45.7 23.1 62.5c5.2 6 1.2 17.5-6.7 17.5L80 176c-35.3 0-64 28.7-64 64zM208 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm32 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM272 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M208 224a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default GingerbreadMan;