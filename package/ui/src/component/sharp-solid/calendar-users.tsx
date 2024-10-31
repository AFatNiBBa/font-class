
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-users` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-users?s=sharp-solid calendar-users}
 * @preview ![calendar-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-users.svg)
 */
const CalendarUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L96 160l0-96 96 0 0-64 64 0zM128 192l384 0 0 1.1c-54.3 7.8-96 54.4-96 110.9c0 31.3 12.9 59.7 33.6 80L424 384 379.2 512l-118.4 0L216 384l-25.6 0c20.7-20.3 33.6-48.7 33.6-80c0-56.4-41.7-103.1-96-110.9l0-1.1zm-16 32a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM224 512L0 512l32-96 160 0 32 96zM448 304a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM608 416l32 96-224 0 32-96 160 0z" />
    </Icon>
);

export default CalendarUsers;