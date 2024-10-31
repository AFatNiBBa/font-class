
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-circle-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-user?s=sharp-duotone-solid album-circle-user}
 * @preview ![album-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/album-circle-user.svg)
 */
const AlbumCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l296.2 0c-16.2-19.7-28.3-42.9-34.8-68.4c-12 2.9-24.5 4.4-37.4 4.4c-88.4 0-160-71.6-160-160s71.6-160 160-160c69.3 0 128.3 44 150.5 105.6c18-6.2 37.4-9.6 57.5-9.6c5.4 0 10.7 .2 16 .7L448 32 0 32zM192 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-31.7 0-60.3-13.2-80.7-34.3L376 416l112 0 24.7 29.7c-20.4 21.2-49 34.3-80.7 34.3zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default AlbumCircleUser;