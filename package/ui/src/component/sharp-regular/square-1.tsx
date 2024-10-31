
import { Icon } from "../../index";

/**
 * A component that renders the `square-1` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-1?s=sharp-regular square-1}
 * @preview ![square-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-1.svg)
 */
const Square_1: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zm96 304l0 48 24 0 56 0 56 0 24 0 0-48-24 0-32 0 0-184 0-24-24 0-8 0-6.2 0-5.4 3L144 164.5l0 54.9 11.7-6.5L200 188.3 200 336l-32 0-24 0z" />
    </Icon>
);

export default Square_1;