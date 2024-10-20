
import { Icon } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=sharp-solid bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 288A208 208 0 1 0 208 0a208 208 0 1 0 0 416zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 448c-54 0-103.9-17.9-144-48l0 112 256 0 32 0 112 0 24 0 0-24 0-46.4c14.3-8.3 24-23.8 24-41.6c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.8 9.7 33.3 24 41.6l0 22.4-88 0 0-64c-40.1 30.1-90 48-144 48z" />
    </Icon>
);

export default BellSchool;