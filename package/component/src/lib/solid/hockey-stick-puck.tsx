
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=solid hockey-stick-puck}
 * @preview ![hockey-stick-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hockey-stick-puck.svg)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M462.3 3.4c15.8 7.9 22.2 27.1 14.3 42.9L261.5 476.6c-10.8 21.7-33 35.4-57.2 35.4L160 512l-32 0-32 0 0-32 0-128 156.2 0L419.4 17.7c7.9-15.8 27.1-22.2 42.9-14.3zM0 384c0-17.7 14.3-32 32-32l32 0 0 160-32 0c-17.7 0-32-14.3-32-32l0-96zm416 32l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default HockeyStickPuck;