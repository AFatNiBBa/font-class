
import { Icon } from "../../index";

/**
 * A component that renders the `sliders-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-up?s=sharp-solid sliders-up}
 * @preview ![sliders-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sliders-up.svg)
 */
const SlidersUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 32 0 32 48 0 0 48 0 64 0 48-48 0 0 256 0 32-64 0 0-32 0-256-48 0 0-48 0-64 0-48 48 0 0-32L64 0l64 0zM288 0l0 32 0 256 48 0 0 48 0 64 0 48-48 0 0 32 0 32-64 0 0-32 0-32-48 0 0-48 0-64 0-48 48 0 0-256 0-32 64 0zM448 32l0 64 48 0 0 48 0 64 0 48-48 0 0 224 0 32-64 0 0-32 0-224-48 0 0-48 0-64 0-48 48 0 0-64 0-32 64 0 0 32zM64 112l0 64 64 0 0-64-64 0zM288 336l-64 0 0 64 64 0 0-64zm96-192l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default SlidersUp;