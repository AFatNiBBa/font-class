
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-duotone-solid binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 32l0 64 96 0 0-64L96 32zM224 96l0 160 64 0 0-160-64 0zm96-64l0 64 96 0 0-64-96 0z" />
        <path d="M192 480l0-224 32 0 0-160-32 0L64 96 48 256 0 336 0 480l192 0zm128 0l192 0 0-144-48-80L448 96 320 96l-32 0 0 160 32 0 0 224z" />
    </Icon>
);

export default Binoculars;