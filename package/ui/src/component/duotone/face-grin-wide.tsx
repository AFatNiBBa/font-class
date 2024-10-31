
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-wide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wide?s=duotone face-grin-wide}
 * @preview ![face-grin-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-grin-wide.svg)
 */
const FaceGrinWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm105.2 75.5c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5zM144 192c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64zm160 0c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64z" />
        <path d="M176 256c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64zm160 0c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64z" />
    </Icon>
);

export default FaceGrinWide;