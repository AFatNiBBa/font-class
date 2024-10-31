
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=duotone person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M304 376l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-30.9-25.1-56-56-56s-56 25.1-56 56z" />
        <path d="M176 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM120 256.9L91.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l35.9 0c28.6 0 55.6 12.7 73.9 34.7l73.7 88.9c11.3 13.6 9.4 33.8-4.2 45.1s-33.8 9.4-45.1-4.2L264 235.3 264 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1z" />
    </Icon>
);

export default PersonCane;