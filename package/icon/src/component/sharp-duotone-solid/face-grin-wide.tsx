
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wide?s=sharp-duotone-solid face-grin-wide}
 * @preview ![face-grin-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-wide.svg)
 */
const FaceGrinWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 46.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2zM144 192c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64zm160 0c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64z" />
        <path d="M176 256c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64zm160 0c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64z" />
    </Icon>
);

export default FaceGrinWide;