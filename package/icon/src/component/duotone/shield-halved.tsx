
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-halved` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-halved?s=duotone shield-halved}
 * @preview ![shield-halved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-halved.svg)
 */
const ShieldHalved: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256.7 0c4.6 0 9.2 1 13.3 2.9L458.4 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-8.3 4-17.4 6-26.4 6c0-169.7 0-339.4 0-509.1z" />
        <path d="M256.7 0c-.2 0-.5 0-.7 0c-4.6 0-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c8.3 4 17.4 6 26.4 6L256 0l.7 0z" />
    </Icon>
);

export default ShieldHalved;