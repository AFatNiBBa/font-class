
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=solid filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M232 32c-15.9 0-30.2 9.4-36.6 23.9s-3.6 31.5 7.2 43.2L352 261.5 352 368c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-154.5L629.4 99.1c10.7-11.7 13.6-28.6 7.2-43.2S615.9 32 600 32L232 32zM40 96c-15.9 0-30.2 9.4-36.6 23.9s-3.6 31.5 7.2 43.2L160 325.5l0 74.5c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-122.5 32-34.8 0-16.7L179 120.7c-6.7-7.3-11.7-15.7-14.9-24.7L40 96z" />
    </Icon>
);

export default Filters;