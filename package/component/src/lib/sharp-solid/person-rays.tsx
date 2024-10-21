
import { Icon } from "../../index";

/**
 * A component that renders the `person-rays` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rays?s=sharp-solid person-rays}
 * @preview ![person-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-rays.svg)
 */
const PersonRays: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-17.5 0L178 142.8l-81.7 128 53.9 34.4 33.8-53L184 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 53.9-34.4L334 142.8 324.6 128l-17.5 0-102.2 0zM57 23L40 6.1 6.1 40 23 57l64 64 17 17L137.9 104 121 87 57 23zM489 57l17-17L472 6.1 455 23 391 87l-17 17L408 137.9l17-17 64-64zM121 425l17-17L104 374.1 87 391 23 455l-17 17L40 505.9l17-17 64-64zM425 391l-17-17L374.1 408l17 17 64 64 17 17L505.9 472l-17-17-64-64z" />
    </Icon>
);

export default PersonRays;