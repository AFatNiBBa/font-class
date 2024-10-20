
import { Icon, generic } from "../../index";

/**
 * A component that renders the `children` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/children?s=sharp-duotone-solid children}
 * @preview ![children](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/children.svg)
 */
const Children: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M323.3 294.9l51.6 37.9 18.9-25.8L408 287.6 408 480l0 32 64 0 0-32 0-96 16 0 0 96 0 32 64 0 0-32 0-192.4 14.2 19.3 18.9 25.8 51.6-37.9-18.9-25.8-70.5-96L537.7 160l-16.2 0-83 0-16.2 0-9.6 13.1-70.5 96-18.9 25.8zM416 64a64 64 0 1 0 128 0A64 64 0 1 0 416 64z" />
        <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm6.3 96l16.2 0 83 0 16.2 0 9.6 13.1 70.5 96 18.9 25.8-51.6 37.9-18.9-25.8L232 287.6l0 .4 0 2.3L264 400l-32 0 0 80 0 32-64 0 0-32 0-80-16 0 0 80 0 32-64 0 0-32 0-80-32 0L88 290.3l0-2.3 0-.4L73.8 306.9 54.9 332.7 3.3 294.9l18.9-25.8 70.5-96 9.6-13.1z" />
    </Icon>
);

export default Children;