
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-b` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-b?s=duotone circle-b}
 * @preview ![circle-b](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNCAyMDRDMzA0IDE4OC41NjIgMjkxLjQzOCAxNzYgMjc2IDE3NkgyMDhWMjMySDI3NkMyOTEuNDM4IDIzMiAzMDQgMjE5LjQzOCAzMDQgMjA0Wk0yOTIgMjgwSDIwOFYzMzZIMjkyQzMwNy40MzggMzM2IDMyMCAzMjMuNDM4IDMyMCAzMDhTMzA3LjQzOCAyODAgMjkyIDI4MFpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yOTIgMzg0SDE4NEMxNzAuNzUgMzg0IDE2MCAzNzMuMjUgMTYwIDM2MFYxNTJDMTYwIDEzOC43NSAxNzAuNzUgMTI4IDE4NCAxMjhIMjc2QzMxNy45MDYgMTI4IDM1MiAxNjIuMDk0IDM1MiAyMDRDMzUyIDIyMC4zNDYgMzQ2LjY5OSAyMzUuNDEgMzM3Ljg4MyAyNDcuODJDMzU2LjA2MiAyNjEuNzE5IDM2OCAyODMuNCAzNjggMzA4QzM2OCAzNDkuOTA2IDMzMy45MDYgMzg0IDI5MiAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMzNy44ODMgMjQ3LjgyQzM0Ni42OTkgMjM1LjQxIDM1MiAyMjAuMzQ2IDM1MiAyMDRDMzUyIDE2Mi4wOTQgMzE3LjkwNiAxMjggMjc2IDEyOEgxODRDMTcwLjc1IDEyOCAxNjAgMTM4Ljc1IDE2MCAxNTJWMzYwQzE2MCAzNzMuMjUgMTcwLjc1IDM4NCAxODQgMzg0SDI5MkMzMzMuOTA2IDM4NCAzNjggMzQ5LjkwNiAzNjggMzA4QzM2OCAyODMuNCAzNTYuMDYyIDI2MS43MTkgMzM3Ljg4MyAyNDcuODJaTTIwOCAxNzZIMjc2QzI5MS40MzggMTc2IDMwNCAxODguNTYyIDMwNCAyMDRTMjkxLjQzOCAyMzIgMjc2IDIzMkgyMDhWMTc2Wk0yOTIgMzM2SDIwOFYyODBIMjkyQzMwNy40MzggMjgwIDMyMCAyOTIuNTYyIDMyMCAzMDhTMzA3LjQzOCAzMzYgMjkyIDMzNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleB: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M304 204C304 188.562 291.438 176 276 176H208V232H276C291.438 232 304 219.438 304 204ZM292 280H208V336H292C307.438 336 320 323.438 320 308S307.438 280 292 280ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM292 384H184C170.75 384 160 373.25 160 360V152C160 138.75 170.75 128 184 128H276C317.906 128 352 162.094 352 204C352 220.346 346.699 235.41 337.883 247.82C356.062 261.719 368 283.4 368 308C368 349.906 333.906 384 292 384Z" />
            <path d="M337.883 247.82C346.699 235.41 352 220.346 352 204C352 162.094 317.906 128 276 128H184C170.75 128 160 138.75 160 152V360C160 373.25 170.75 384 184 384H292C333.906 384 368 349.906 368 308C368 283.4 356.062 261.719 337.883 247.82ZM208 176H276C291.438 176 304 188.562 304 204S291.438 232 276 232H208V176ZM292 336H208V280H292C307.438 280 320 292.562 320 308S307.438 336 292 336Z" />
    </Icon>
);

export default CircleB;