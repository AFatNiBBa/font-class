
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-wink` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wink?s=duotone face-grin-wink}
 * @preview ![face-grin-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-grin-wink.svg)
 */
const FaceGrinWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm105.2 75.5c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5zM208.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm66.8 6.4c30.4-40.5 91.2-40.5 121.6 0c2.2 2.9 3.2 6.2 3.2 9.6c0 4.9-2.2 9.7-6.4 12.8c-7.1 5.3-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm124.4-6.4c17.6-23.5 52.8-23.5 70.4 0c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2z" />
    </Icon>
);

export default FaceGrinWink;