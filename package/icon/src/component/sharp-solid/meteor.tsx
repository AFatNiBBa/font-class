
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=sharp-solid meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L299.4 75.9 304 16 101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L496 208l-59.9 4.6L512 0zM192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Meteor;