
import { Icon } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=light bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 384a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm0 32c-41.2 0-79.7-12-112-32.7L96 448c0 17.7 14.3 32 32 32l144 0 16 0c17.7 0 32-14.3 32-32l0-64.7C287.7 404 249.2 416 208 416zm64 96l-144 0c-35.3 0-64-28.7-64-64l0-89.9C24.6 320.2 0 267 0 208C0 93.1 93.1 0 208 0S416 93.1 416 208c0 59-24.6 112.2-64 150.1l0 89.9c0 11.7-3.1 22.6-8.6 32l72.6 0c17.7 0 32-14.3 32-32l0-2.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3l0 2.7c0 35.3-28.7 64-64 64l-128 0-16 0zM256 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-128 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM464 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default BellSchool;