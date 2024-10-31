
import { Icon } from "../../index";

/**
 * A component that renders the `person-shelter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-shelter?s=regular person-shelter}
 * @preview ![person-shelter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-shelter.svg)
 */
const PersonShelter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M268.1 3.3c-7.5-4.4-16.8-4.4-24.3 0l-232 136C4.5 143.6 0 151.5 0 160L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-314.2L256 51.8 464 173.8 464 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-328c0-8.5-4.5-16.4-11.9-20.7l-232-136zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-16 64.5c2-.3 4.1-.5 6.2-.5l19.5 0c2.1 0 4.2 .2 6.2 .5l0 95.5-32 0 0-95.5zM240 416l32 0 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-159.7 18.9 35c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l18.9-35L192 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72z" />
    </Icon>
);

export default PersonShelter;