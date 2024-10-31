
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=duotone pen-ruler}
 * @preview ![pen-ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-ruler.svg)
 */
const PenRuler: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 94.1c-18.7 18.7-18.7 49.1 0 67.9l87.4 87.4L249.4 103.4 204.2 58.3c-.3 .3-.6 .7-.9 1l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c.3-.3 .7-.6 1-.9L161.9 16C152.6 6.6 140.3 1.9 128 1.9s-24.6 4.7-33.9 14.1L16 94.1zM262.6 408.6L350.1 496c9.4 9.4 21.7 14.1 33.9 14.1s24.6-4.7 33.9-14.1L496 417.9c18.7-18.7 18.7-49.1 0-67.9l-19.8-19.8c-.3 .3-.6 .7-.9 1l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c.3-.3 .7-.6 1-.9l-45.1-45.1L262.6 408.6z" />
        <path d="M378.7 19.3L322.3 75.7 436.3 189.7l56.4-56.4c25-25 25-65.5 0-90.5L469.3 19.3c-25-25-65.5-25-90.5 0zm-79 79L44.9 353.2c-6.7 6.7-11.6 15.1-14.2 24.2L.9 481.4C-1.5 489.8 .9 498.8 7 505s15.2 8.5 23.6 6.1l104-29.7c9.2-2.6 17.5-7.5 24.2-14.2L413.7 212.3 299.7 98.3z" />
    </Icon>
);

export default PenRuler;