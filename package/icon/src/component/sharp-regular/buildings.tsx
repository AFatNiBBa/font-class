
import { Icon } from "../../index";

/**
 * A component that renders the `buildings` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/buildings?s=sharp-regular buildings}
 * @preview ![buildings](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/buildings.svg)
 */
const Buildings: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 48l0 416-192 0 0-416 192 0zM272 0L224 0l0 48 0 416 0 48 48 0 192 0 48 0 0-48 0-416 0-48L464 0 272 0zM192 128L24 128 0 128l0 24L0 488l0 24 24 0 168 0 0-48L48 464l0-288 144 0 0-48zM160 320l-64 0 0 64 64 0 0-64zm176 32l64 0 0-64-64 0 0 64zM160 224l-64 0 0 64 64 0 0-64zM336 96l0 64 64 0 0-64-64 0zm64 160l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default Buildings;