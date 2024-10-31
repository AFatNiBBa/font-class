
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=duotone person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384a128 128 0 1 0 256 0A128 128 0 1 0 0 384zm200 0A72 72 0 1 1 56 384a72 72 0 1 1 144 0zm184 0a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm200 0a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M400 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM365.4 111.2L427.2 160l52.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-7.3 0-14.3-2.5-20-7l-40.7-32.6L295 232.9l42.7 28.5c8.9 5.9 14.2 15.9 14.2 26.6l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-110.9-60.5-38.4c-32.8-20.8-35-67.9-4.3-91.6l83.1-64.2c17.4-13.5 41.8-13.3 59.1 .3z" />
    </Icon>
);

export default PersonBiking;