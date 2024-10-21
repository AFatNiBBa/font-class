
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=sharp-thin forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 0l-8 0 0 8 0 120 0 8 16 0 0-8 0-112 139.1 0L392.9 227.7l3.7 7.1 14.2-7.4-3.7-7.1-112-216L292.9 0 288 0 136 0zM96 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176c53 0 96-43 96-96l64 0c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6l0-72.4 0-16-16 0-136 0L144 160 16 160 0 160l0 16L0 400l0 16c0 53 43 96 96 96zm0-192c-33.4 0-62.8 17-80 42.9L16 176l122.4 0L254 268.5l4.4 3.5 5.6 0 136 0 0 60.8c-14.1-8.2-30.5-12.8-48-12.8c-47.6 0-87.1 34.6-94.7 80l-66.7 0c-7.6-45.4-47.1-80-94.7-80zm256 16a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM496 8l0-8L480 0l0 8 0 432 0 8 8 0 144 0 8 0 0-16-8 0-136 0L496 8z" />
    </Icon>
);

export default Forklift;