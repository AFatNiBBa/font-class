
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=sharp-light object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l64 0L96 0 32 0 0 0 0 32 0 96l32 0 0-64zm192 0l0-32L128 0l0 32 96 0zM32 128L0 128l0 96 32 0 0-96zm0 128L0 256l0 64 0 32 32 0 64 0 0-32-64 0 0-64zm96 96l32 0 32 0 32 0 0-32-32 0-32 0-32 0 0 32zm32 32l0 96 0 32 32 0 288 0 32 0 0-32 0-288 0-32-32 0-96 0 0 32 96 0 0 288-288 0 0-96-32 0zM352 192l0-32 0-32-32 0 0 32 0 32 0 32 32 0 0-32zm0-160l0-32L320 0 256 0l0 32 64 0 0 64 32 0 0-64zM256 320l0 32 64 0 32 0 0-32 0-64-32 0 0 64-64 0z" />
    </Icon>
);

export default ObjectSubtract;