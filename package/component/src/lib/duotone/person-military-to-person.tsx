
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-military-to-person` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-military-to-person?s=duotone person-military-to-person}
 * @preview ![person-military-to-person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-military-to-person.svg)
 */
const PersonMilitaryToPerson: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 256c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32zm0 176c0-6.9 3-13.5 8.2-18.1l64-56c10-8.7 25.1-7.7 33.9 2.3s7.7 25.1-2.3 33.9L375.9 408 488 408c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112.1 0 15.9 13.9c10 8.7 11 23.9 2.3 33.9s-23.9 11-33.9 2.3l-64-56c-5.2-4.6-8.2-11.1-8.2-18.1zM448 96A64 64 0 1 1 320 96a64 64 0 1 1 128 0z" />
        <path d="M71 12.5L182.2 .1C191.7-1 200 6.5 200 16l0 14.1c0 8.8-7.1 15.9-15.9 16l-111.4 0C63.5 46 56 38.5 56 29.2c0-8.6 6.5-15.8 15-16.8zM189.5 78.1c1.6 5.7 2.5 11.7 2.5 17.9c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-6.2 .9-12.2 2.5-17.9l122.9 0zM32 256c0-18.8 8.1-35.7 21-47.4l144.2 111c-1.7 .3-3.4 .4-5.2 .4L64 320c-17.7 0-32-14.3-32-32l0-32zm190.2 42.5L85.1 192.9c3.6-.6 7.2-.9 10.9-.9l64 0c35.3 0 64 28.7 64 64l0 32c0 3.7-.6 7.2-1.8 10.5zM224 432c0 6.9-3 13.5-8.2 18.1l-64 56c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9L136.1 456 24 456c-13.3 0-24-10.7-24-24s10.7-24 24-24l112.1 0-15.9-13.9c-10-8.7-11-23.9-2.3-33.9s23.9-11 33.9-2.3l64 56c5.2 4.6 8.2 11.1 8.2 18.1z" />
    </Icon>
);

export default PersonMilitaryToPerson;