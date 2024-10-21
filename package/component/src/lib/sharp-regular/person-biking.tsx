
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=sharp-regular person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 384A80 80 0 1 1 48 384a80 80 0 1 1 160 0zM128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM592 384a80 80 0 1 1 -160 0 80 80 0 1 1 160 0zM512 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM340.9 115.8l-13.4-8.5-13.1 9-72.1 49.6c-40.2 27.6-36 88.2 7.6 110l54.1 27L304 416l0 24 48 0 0-24 0-128 0-14.8-13.3-6.6-67.4-33.7c-10.9-5.4-11.9-20.6-1.9-27.5l59-40.6 74.6 47.5L409 216l7 0 64 0 24 0 0-48-24 0-57 0-82.1-52.2z" />
    </Icon>
);

export default PersonBiking;