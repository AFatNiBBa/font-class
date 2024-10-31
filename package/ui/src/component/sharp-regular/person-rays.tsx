
import { Icon } from "../../index";

/**
 * A component that renders the `person-rays` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rays?s=sharp-regular person-rays}
 * @preview ![person-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-rays.svg)
 */
const PersonRays: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-14.1 0-6.9 12.4-75.3 136L97 297.4l42 23.3 11.6-21L192 224.9 192 488l0 24 48 0 0-24 0-136 32 0 0 136 0 24 48 0 0-24 0-263.1 41.4 74.8 11.6 21 42-23.3-11.6-21-75.3-136L321.2 128l-14.1 0-102.2 0zM272 304l-32 0 0-128 32 0 0 128zM57 23L40 6.1 6.1 40 23 57l64 64 17 17L137.9 104 121 87 57 23zM489 57l17-17L472 6.1 455 23 391 87l-17 17L408 137.9l17-17 64-64zM121 425l17-17L104 374.1 87 391 23 455l-17 17L40 505.9l17-17 64-64zM425 391l-17-17L374.1 408l17 17 64 64 17 17L505.9 472l-17-17-64-64z" />
    </Icon>
);

export default PersonRays;