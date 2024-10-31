
import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=sharp-solid road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 32L160 32 32 480l256 0 0-64 0-32 64 0 0 32 0 64 32 0 0-192 32 0 0-16c0-58.1 44.2-105.8 100.7-111.4L480 32 352 32l0 64 0 32-64 0 0-32 0-64zm64 192l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zm176 16c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default RoadLock;