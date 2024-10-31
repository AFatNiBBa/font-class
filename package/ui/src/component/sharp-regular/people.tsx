
import { Icon } from "../../index";

/**
 * A component that renders the `people` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people?s=sharp-regular people}
 * @preview ![people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/people.svg)
 */
const People: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-14.1 0-6.9 12.4-75.3 136L1 297.4l42 23.3 11.6-21L96 224.9 96 488l0 24 48 0 0-24 0-136 32 0 0 136 0 24 48 0 0-24 0-263.1 41.4 74.8 11.6 21 42-23.3-11.6-21-75.3-136L225.2 128l-14.1 0-102.2 0zM176 304l-32 0 0-128 32 0 0 128zM480 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-51.1 32l-14.1 0-6.9 12.4-75.3 136-11.6 21 42 23.3 11.6-21L420 217.7 383 336l-15 48 48 0 0 104 0 24 48 0 0-24 0-104 32 0 0 104 0 24 48 0 0-24 0-104 48 0-15-48L540 217.7l45.4 81.9 11.6 21 42-23.3-11.6-21-75.3-136L545.2 128l-14.1 0L512 128l-64 0-19.1 0zM480 186.5L526.7 336l-93.4 0L480 186.5z" />
    </Icon>
);

export default People;