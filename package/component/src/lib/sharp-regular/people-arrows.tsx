
import { Icon } from "../../index";

/**
 * A component that renders the `people-arrows` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-arrows?s=sharp-regular people-arrows}
 * @preview ![people-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/people-arrows.svg)
 */
const PeopleArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM78 208l-4 96 30.8 0 39.6 39.6L192 391.2l0 96.8 0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-136-40 0 2-48 6-144 192 0 1 23.8-16.6 16.6-29.5 29.5L178 208 78 208zM448 488l0-96.8 47.6-47.6L535.2 304l30.8 0-4-96L462 208l-.9 21.9-29.5-29.5L415 183.8l1-23.8 192 0 6 144 2 48-40 0 0 136 0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24zm0-424a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM265 257l-23 23 156.1 0-23-23-17-17L392 206.1l17 17 64 64 17 17-17 17-64 64-17 17L358.1 368l17-17 23-23-156.1 0 23 23 17 17L248 401.9l-17-17-64-64-17-17 17-17 64-64 17-17L281.9 240l-17 17z" />
    </Icon>
);

export default PeopleArrows;