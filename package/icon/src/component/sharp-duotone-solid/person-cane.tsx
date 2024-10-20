
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=sharp-duotone-solid person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M304 376l0 8 0 24 48 0 0-24 0-8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112 0 24 48 0 0-24 0-112c0-30.9-25.1-56-56-56s-56 25.1-56 56z" />
        <path d="M176 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM120 256.9L91.4 304.5 74.9 331.9l-54.9-33 16.5-27.4 76.9-128 9.3-15.5 18.1 0 102.2 0 15 0 9.6 11.6 92.9 112 20.4 24.6-49.3 40.9-20.4-24.6L264 235.3 264 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-223.1z" />
    </Icon>
);

export default PersonCane;