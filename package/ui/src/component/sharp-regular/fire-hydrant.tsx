
import { Icon } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=sharp-regular fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32l0-32L160 0l0 32 0 4c-45 11.6-80.4 47-92 92l-12 0-24 0 0 48 24 0 272 0 24 0 0-48-24 0-12 0c-11.6-45-47-80.4-92-92l0-4zM192 376a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM56 464l-24 0 0 48 24 0 32 0 208 0 32 0 24 0 0-48-24 0-8 0 0-80 48 0 0-128-48 0 0-24 0-24-48 0 0 24 0 232-160 0 0-232 0-24-48 0 0 24 0 24-48 0 0 128 48 0 0 80-8 0z" />
    </Icon>
);

export default FireHydrant;