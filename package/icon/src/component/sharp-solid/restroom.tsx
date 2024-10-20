
import { Icon } from "../../index";

/**
 * A component that renders the `restroom` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/restroom?s=sharp-solid restroom}
 * @preview ![restroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/restroom.svg)
 */
const Restroom: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zM53.4 128l23.5 0 102.2 0 23.5 0 7 22.5 44.9 144-54.5 17L200 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-168.5-54.5-17 44.9-144 7-22.5zM344 0l0 24 0 464 0 24-48 0 0-24 0-464 0-24 48 0zM464 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-26.6 80l23.5 0 102.2 0 23.5 0 7 22.5 44.9 144L598.3 307 624 384l-40 0 0 96 0 32-64 0 0-32 0-96-16 0 0 96 0 32-64 0 0-32 0-96-40 0 25.7-77-40.2-12.5 44.9-144 7-22.5z" />
    </Icon>
);

export default Restroom;