
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=sharp-duotone-solid shuttlecock}
 * @preview ![shuttlecock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxMC4yQzAgNDY2LjQgNDUuNiA1MTIgMTAxLjggNTEyYzI3IDAgNTIuOS0xMC43IDcyLTI5LjhMMTkyIDQ2NCA0OCAzMjAgMjkuOCAzMzguMkMxMC43IDM1Ny4zIDAgMzgzLjIgMCA0MTAuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4IDMyMGw0OC00OEwyMjQgMGw5NiAwIDAgNDgtMTYgMC00MSAwTDI1MC42IDg3LjFsLTMxLjMgOTkuMkwxNzYgMjA4bC00MCA4MCAyNyAyNyA3MS45LTcxLjlMMjgxLjEgOTYuOCAyODYuNCA4MCAzMDQgODBsMTA0IDAgMjQgMCAwIDI0IDAgMTA0IDAgMTcuNi0xNi44IDUuM0wyNjguOCAyNzcuMSAxOTcgMzQ5bDI3IDI3IDgwLTQwIDIxLjYtNDMuMyA5OS4yLTMxLjNMNDY0IDI0OWwwLTQxIDAtMTYgNDggMCAwIDk2TDI0MCA0MTZsLTQ4IDQ4TDQ4IDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 410.2C0 466.4 45.6 512 101.8 512c27 0 52.9-10.7 72-29.8L192 464 48 320 29.8 338.2C10.7 357.3 0 383.2 0 410.2z" />
            <path d="M48 320l48-48L224 0l96 0 0 48-16 0-41 0L250.6 87.1l-31.3 99.2L176 208l-40 80 27 27 71.9-71.9L281.1 96.8 286.4 80 304 80l104 0 24 0 0 24 0 104 0 17.6-16.8 5.3L268.8 277.1 197 349l27 27 80-40 21.6-43.3 99.2-31.3L464 249l0-41 0-16 48 0 0 96L240 416l-48 48L48 320z" />
    </Icon>
);

export default Shuttlecock;