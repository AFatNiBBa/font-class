
import { Icon } from "../../index";

/**
 * A component that renders the `boxes-stacked` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-stacked?s=sharp-light boxes-stacked}
 * @preview ![boxes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/boxes-stacked.svg)
 */
const BoxesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 32l0 160 32 0 0-160 0-32L416 0 352 0 320 0 256 0 224 0 160 0 128 0l0 32 0 160 32 0 0-160 64 0 0 64 0 32 32 0 64 0 32 0 0-32 0-64 64 0zM256 32l64 0 0 64-64 0 0-64zm96 480l192 0 32 0 0-32 0-224 0-32-32 0-64 0-32 0-64 0-32 0 0 32 0 64 0 32 32 0 64 0 32 0 0-32 0-64 64 0 0 224-192 0 0 32zm32-256l64 0 0 64-64 0 0-64zM288 480L32 480l0-224 64 0 0 64 0 32 32 0 64 0 32 0 0-32 0-64 64 0 0 224zM128 320l0-64 64 0 0 64-64 0zm160-96l-64 0-32 0-64 0-32 0-64 0L0 224l0 32L0 480l0 32 32 0 256 0 32 0 0-32 0-224 0-32-32 0z" />
    </Icon>
);

export default BoxesStacked;