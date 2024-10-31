
import { Icon } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=solid bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 288A208 208 0 1 0 208 0a208 208 0 1 0 0 416zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 448c-54 0-103.9-17.9-144-48l0 64c0 26.5 21.5 48 48 48l208 0 32 0 40 0c43.4 0 80.1-28.8 92-68.3c16.6-7.6 28-24.3 28-43.7c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15.5 7.3 29.2 18.7 38c-8 15.4-24.1 26-42.7 26l-40 0 0-64c-40.1 30.1-90 48-144 48z" />
    </Icon>
);

export default BellSchool;