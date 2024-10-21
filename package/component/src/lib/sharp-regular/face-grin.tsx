
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin?s=sharp-regular face-grin}
 * @preview ![face-grin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-grin.svg)
 */
const FaceGrin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm255.9 62.8c50.3 0 97.2-8.6 136.5-23.5C378.6 355.2 322.7 400 255.9 400s-122.7-44.8-136.5-104.6c39.3 14.9 86.2 23.5 136.5 23.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceGrin;