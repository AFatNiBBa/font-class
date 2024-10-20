
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=sharp-light object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l288 0 0 96 32 0 0-96 0-32L320 0 32 0 0 0 0 32 0 320l0 32 32 0 96 0 0-32-96 0L32 32zM160 384l0 96 0 32 32 0 288 0 32 0 0-32 0-288 0-32-32 0-96 0 0 32 96 0 0 288-288 0 0-96-32 0zm64-32l0-32-32 0 0-64-32 0 0 64 0 32 32 0 32 0zM160 224l32 0 0-32 64 0 0-32-64 0-32 0 0 32 0 32zm96 128l64 0 32 0 0-32 0-32-32 0 0 32-64 0 0 32zm96-96l0-64 0-32-32 0-32 0 0 32 32 0 0 64 32 0z" />
    </Icon>
);

export default ObjectExclude;