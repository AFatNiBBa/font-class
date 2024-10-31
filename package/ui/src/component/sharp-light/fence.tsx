
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-light fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 288l0 160 64 0 0-64 0-32 0-160 0-32 0-50.7-32-32-32 32L32 288zm96 96l0 64 0 32-32 0-64 0L0 480l0-32L0 288 0 96 41.4 54.6 64 32 86.6 54.6 128 96l0 64 64 0 0-64 41.4-41.4L256 32l22.6 22.6L320 96l0 64 64 0 0-64 41.4-41.4L448 32l22.6 22.6L512 96l0 352 0 32-32 0-64 0-32 0 0-32 0-64-64 0 0 64 0 32-32 0-64 0-32 0 0-32 0-64-64 0zm288-32l0 32 0 64 64 0 0-338.7-32-32-32 32L416 288l0 64zm-32 0l0-64 0-96-64 0 0 160 64 0zM128 192l0 160 64 0 0-64 0-96-64 0zm96-82.7L224 288l0 160 64 0 0-64 0-32 0-160 0-32 0-50.7-32-32-32 32z" />
    </Icon>
);

export default Fence;