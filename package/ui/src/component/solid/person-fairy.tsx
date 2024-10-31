
import { Icon } from "../../index";

/**
 * A component that renders the `person-fairy` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-fairy?s=solid person-fairy}
 * @preview ![person-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/person-fairy.svg)
 */
const PersonFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0a64 64 0 1 1 0 128A64 64 0 1 1 320 0zM297.6 160l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L384 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3c3.5-41.5 38.1-73.4 79.7-73.4zM32 32c89.4 0 169.4 40.8 222.2 104.7c-37.4 15.7-64.6 51.2-68.2 94L181.9 280c-3 36.2 14.4 69 42.1 87.7l0 79.6C191.7 468 153.2 480 112 480l-16 0c-17.7 0-32-14.3-32-32c0-45.7 14.7-88 39.7-122.3C40.6 275.9 0 198.7 0 112L0 64C0 46.3 14.3 32 32 32zM528 480c-41.2 0-79.7-12-112-32.7l0-79.6c27.8-18.7 45.1-51.5 42.1-87.7L454 230.7c-3.6-42.7-30.8-78.2-68.2-94C438.6 72.8 518.6 32 608 32c17.7 0 32 14.3 32 32l0 48c0 86.7-40.6 163.9-103.7 213.7C561.3 360 576 402.3 576 448c0 17.7-14.3 32-32 32l-16 0z" />
    </Icon>
);

export default PersonFairy;