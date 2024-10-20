
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=duotone binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 64l0 32 96 0 0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zM224 96l0 160 64 0 0-160-64 0zm96-32l0 32 96 0 0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z" />
        <path d="M192 448l0-192 32 0 0-160-32 0L93 96c-16.4 0-30.2 12.5-31.8 28.8l-9 89.7c-2.7 27.3-11.5 53.7-25.6 77.3C9.2 320.7 0 353.8 0 387.6L0 448c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32zm128 0c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-60.4c0-33.8-9.2-66.9-26.5-95.8c-14.1-23.6-22.9-49.9-25.6-77.3l-9-89.7C449.2 108.5 435.5 96 419 96l-99 0-32 0 0 160 32 0 0 192z" />
    </Icon>
);

export default Binoculars;