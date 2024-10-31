
import { Icon } from "../../index";

/**
 * A component that renders the `location-question` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-question?s=sharp-solid location-question}
 * @preview ![location-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-question.svg)
 */
const LocationQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zM104 152c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 232.4l0 7.6 0 24-48 0 0-24 0-21.5 0-13.9 12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L160 144c-4.4 0-8 3.6-8 8l0 6.5-48 0 0-6.5zm64 152l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default LocationQuestion;