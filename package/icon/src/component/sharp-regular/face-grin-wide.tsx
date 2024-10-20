
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-wide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wide?s=sharp-regular face-grin-wide}
 * @preview ![face-grin-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-grin-wide.svg)
 */
const FaceGrinWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm255.9 62.8c50.3 0 97.2-8.6 136.5-23.5C378.6 355.2 322.7 400 255.9 400s-122.7-44.8-136.5-104.6c39.3 14.9 86.2 23.5 136.5 23.5zM224 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64zm96 64c-17.7 0-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64z" />
    </Icon>
);

export default FaceGrinWide;