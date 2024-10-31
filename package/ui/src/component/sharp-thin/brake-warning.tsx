
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=sharp-thin brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 432a224 224 0 1 0 0-448 224 224 0 1 0 0 448zm8-344l0-8-16 0 0 8 0 160 0 8 16 0 0-8 0-160zM304 336l0 32 32 0 0-32-32 0zM62.7 96.3l4.3-6.7L53.6 80.9l-4.3 6.7C18.1 136.2 0 194 0 256s18.1 119.8 49.3 168.3l4.3 6.7 13.5-8.6-4.3-6.7C33.2 369.6 16 314.8 16 256s17.2-113.6 46.7-159.7zm528-8.6l-4.3-6.7-13.5 8.6 4.3 6.7C606.8 142.4 624 197.2 624 256s-17.2 113.6-46.7 159.7l-4.3 6.7 13.5 8.6 4.3-6.7C621.9 375.8 640 318 640 256s-18.1-119.8-49.3-168.3z" />
    </Icon>
);

export default BrakeWarning;