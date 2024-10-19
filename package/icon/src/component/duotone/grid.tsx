
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grid?s=duotone grid}
 * @preview ![grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAwSDIyNEMyMDYuMzI2IDAgMTkyIDE0LjMyNiAxOTIgMzJWOTZDMTkyIDExMy42NzQgMjA2LjMyNiAxMjggMjI0IDEyOEgyODhDMzA1LjY3NCAxMjggMzIwIDExMy42NzQgMzIwIDk2VjMyQzMyMCAxNC4zMjYgMzA1LjY3NCAwIDI4OCAwWk0yODggMzg0SDIyNEMyMDYuMzI2IDM4NCAxOTIgMzk4LjMyNiAxOTIgNDE2VjQ4MEMxOTIgNDk3LjY3NCAyMDYuMzI2IDUxMiAyMjQgNTEySDI4OEMzMDUuNjc0IDUxMiAzMjAgNDk3LjY3NCAzMjAgNDgwVjQxNkMzMjAgMzk4LjMyNiAzMDUuNjc0IDM4NCAyODggMzg0Wk05NiAxOTJIMzJDMTQuMzI2IDE5MiAwIDIwNi4zMjYgMCAyMjRWMjg4QzAgMzA1LjY3NCAxNC4zMjYgMzIwIDMyIDMyMEg5NkMxMTMuNjc0IDMyMCAxMjggMzA1LjY3NCAxMjggMjg4VjIyNEMxMjggMjA2LjMyNiAxMTMuNjc0IDE5MiA5NiAxOTJaTTQ4MCAxOTJINDE2QzM5OC4zMjYgMTkyIDM4NCAyMDYuMzI2IDM4NCAyMjRWMjg4QzM4NCAzMDUuNjc0IDM5OC4zMjYgMzIwIDQxNiAzMjBINDgwQzQ5Ny42NzQgMzIwIDUxMiAzMDUuNjc0IDUxMiAyODhWMjI0QzUxMiAyMDYuMzI2IDQ5Ny42NzQgMTkyIDQ4MCAxOTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTk2IDBIMzJDMTQuMzI2IDAgMCAxNC4zMjYgMCAzMlY5NkMwIDExMy42NzQgMTQuMzI2IDEyOCAzMiAxMjhIOTZDMTEzLjY3NCAxMjggMTI4IDExMy42NzQgMTI4IDk2VjMyQzEyOCAxNC4zMjYgMTEzLjY3NCAwIDk2IDBaTTQ4MCAwSDQxNkMzOTguMzI2IDAgMzg0IDE0LjMyNiAzODQgMzJWOTZDMzg0IDExMy42NzQgMzk4LjMyNiAxMjggNDE2IDEyOEg0ODBDNDk3LjY3NCAxMjggNTEyIDExMy42NzQgNTEyIDk2VjMyQzUxMiAxNC4zMjYgNDk3LjY3NCAwIDQ4MCAwWk05NiAzODRIMzJDMTQuMzI2IDM4NCAwIDM5OC4zMjYgMCA0MTZWNDgwQzAgNDk3LjY3NCAxNC4zMjYgNTEyIDMyIDUxMkg5NkMxMTMuNjc0IDUxMiAxMjggNDk3LjY3NCAxMjggNDgwVjQxNkMxMjggMzk4LjMyNiAxMTMuNjc0IDM4NCA5NiAzODRaTTQ4MCAzODRINDE2QzM5OC4zMjYgMzg0IDM4NCAzOTguMzI2IDM4NCA0MTZWNDgwQzM4NCA0OTcuNjc0IDM5OC4zMjYgNTEyIDQxNiA1MTJINDgwQzQ5Ny42NzQgNTEyIDUxMiA0OTcuNjc0IDUxMiA0ODBWNDE2QzUxMiAzOTguMzI2IDQ5Ny42NzQgMzg0IDQ4MCAzODRaTTI4OCAxOTJIMjI0QzIwNi4zMjYgMTkyIDE5MiAyMDYuMzI2IDE5MiAyMjRWMjg4QzE5MiAzMDUuNjc0IDIwNi4zMjYgMzIwIDIyNCAzMjBIMjg4QzMwNS42NzQgMzIwIDMyMCAzMDUuNjc0IDMyMCAyODhWMjI0QzMyMCAyMDYuMzI2IDMwNS42NzQgMTkyIDI4OCAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Grid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 0H224C206.326 0 192 14.326 192 32V96C192 113.674 206.326 128 224 128H288C305.674 128 320 113.674 320 96V32C320 14.326 305.674 0 288 0ZM288 384H224C206.326 384 192 398.326 192 416V480C192 497.674 206.326 512 224 512H288C305.674 512 320 497.674 320 480V416C320 398.326 305.674 384 288 384ZM96 192H32C14.326 192 0 206.326 0 224V288C0 305.674 14.326 320 32 320H96C113.674 320 128 305.674 128 288V224C128 206.326 113.674 192 96 192ZM480 192H416C398.326 192 384 206.326 384 224V288C384 305.674 398.326 320 416 320H480C497.674 320 512 305.674 512 288V224C512 206.326 497.674 192 480 192Z" />
            <path d="M96 0H32C14.326 0 0 14.326 0 32V96C0 113.674 14.326 128 32 128H96C113.674 128 128 113.674 128 96V32C128 14.326 113.674 0 96 0ZM480 0H416C398.326 0 384 14.326 384 32V96C384 113.674 398.326 128 416 128H480C497.674 128 512 113.674 512 96V32C512 14.326 497.674 0 480 0ZM96 384H32C14.326 384 0 398.326 0 416V480C0 497.674 14.326 512 32 512H96C113.674 512 128 497.674 128 480V416C128 398.326 113.674 384 96 384ZM480 384H416C398.326 384 384 398.326 384 416V480C384 497.674 398.326 512 416 512H480C497.674 512 512 497.674 512 480V416C512 398.326 497.674 384 480 384ZM288 192H224C206.326 192 192 206.326 192 224V288C192 305.674 206.326 320 224 320H288C305.674 320 320 305.674 320 288V224C320 206.326 305.674 192 288 192Z" />
    </Icon>
);

export default Grid;