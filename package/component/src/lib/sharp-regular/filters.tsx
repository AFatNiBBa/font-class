
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=sharp-regular filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 272l0-17.1-10.9-13.3L240.9 80l350.1 0L458.9 241.6 448 254.9l0 17.1 0 108.1-64-51.2 0-56.9zM192 32l0 48 0 16L336 272l0 80 112 89.6L496 480l0-61.5L496 272 640 96l0-16 0-48-48 0L240 32l-48 0zM304 283.4l-9.5-11.6-27.6 33.8L256 318.9l0 17.1 0 76.1-64-51.2 0-24.9 0-17.1-10.8-13.3L48.9 144l141 0-22.7-27.7-7.2-8.8L160 96 48 96 0 96l0 48 0 16L144 336l0 48 112 89.6L304 512l0-61.5 0-83.2 0-15.4 0-16 0-52.6z" />
    </Icon>
);

export default Filters;