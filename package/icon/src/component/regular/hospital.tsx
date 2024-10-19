
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hospital` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital?s=regular hospital}
 * @preview ![hospital](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTc3LjI4MVYxNDIuNzE5QzI1NiAxMzguMTI1IDI1Mi4yNzMgMTM0LjM5OCAyNDcuNjggMTM0LjM5OEgyMTcuNjAyVjEwNC4zMkMyMTcuNjAyIDk5LjcyNyAyMTMuODc1IDk2IDIwOS4yODEgOTZIMTc0LjcxOUMxNzAuMTI1IDk2IDE2Ni4zOTggOTkuNzI3IDE2Ni4zOTggMTA0LjMyVjEzNC4zOThIMTM2LjMyQzEzMS43MjcgMTM0LjM5OCAxMjggMTM4LjEyNSAxMjggMTQyLjcxOVYxNzcuMjgxQzEyOCAxODEuODc1IDEzMS43MjcgMTg1LjYwMiAxMzYuMzIgMTg1LjYwMkgxNjYuMzk4VjIxNS42OEMxNjYuMzk4IDIyMC4yNzMgMTcwLjEyNSAyMjQgMTc0LjcxOSAyMjRIMjA5LjI4MUMyMTMuODc1IDIyNCAyMTcuNjAyIDIyMC4yNzMgMjE3LjYwMiAyMTUuNjhWMTg1LjYwMkgyNDcuNjhDMjUyLjI3MyAxODUuNjAyIDI1NiAxODEuODc1IDI1NiAxNzcuMjgxWk0xNDggMjg4SDEwOEMxMDEuMzc1IDI4OCA5NiAyOTMuMzc1IDk2IDMwMFYzNDBDOTYgMzQ2LjYyNSAxMDEuMzc1IDM1MiAxMDggMzUySDE0OEMxNTQuNjI1IDM1MiAxNjAgMzQ2LjYyNSAxNjAgMzQwVjMwMEMxNjAgMjkzLjM3NSAxNTQuNjI1IDI4OCAxNDggMjg4Wk0xNDggMzg0SDEwOEMxMDEuMzc1IDM4NCA5NiAzODkuMzc1IDk2IDM5NlY0MzZDOTYgNDQyLjYyNSAxMDEuMzc1IDQ0OCAxMDggNDQ4SDE0OEMxNTQuNjI1IDQ0OCAxNjAgNDQyLjYyNSAxNjAgNDM2VjM5NkMxNjAgMzg5LjM3NSAxNTQuNjI1IDM4NCAxNDggMzg0Wk0zMjAgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ4OEMwIDUwMS4yNTQgMTAuNzQ2IDUxMiAyNCA1MTJTNDggNTAxLjI1NCA0OCA0ODhWNjRDNDggNTUuMTYyIDU1LjE2NCA0OCA2NCA0OEgzMjBDMzI4LjgzNiA0OCAzMzYgNTUuMTYyIDMzNiA2NFY0ODhDMzM2IDUwMS4yNTQgMzQ2Ljc0NiA1MTIgMzYwIDUxMlMzODQgNTAxLjI1NCAzODQgNDg4VjY0QzM4NCAyOC42NTIgMzU1LjM0NiAwIDMyMCAwWk0yNzYgMjg4SDIzNkMyMjkuMzc1IDI4OCAyMjQgMjkzLjM3NSAyMjQgMzAwVjM0MEMyMjQgMzQ2LjYyNSAyMjkuMzc1IDM1MiAyMzYgMzUySDI3NkMyODIuNjI1IDM1MiAyODggMzQ2LjYyNSAyODggMzQwVjMwMEMyODggMjkzLjM3NSAyODIuNjI1IDI4OCAyNzYgMjg4Wk0yNzYgMzg0SDIzNkMyMjkuMzc1IDM4NCAyMjQgMzg5LjM3NSAyMjQgMzk2VjQzNkMyMjQgNDQyLjYyNSAyMjkuMzc1IDQ0OCAyMzYgNDQ4SDI3NkMyODIuNjI1IDQ0OCAyODggNDQyLjYyNSAyODggNDM2VjM5NkMyODggMzg5LjM3NSAyODIuNjI1IDM4NCAyNzYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hospital(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256 177.281V142.719C256 138.125 252.273 134.398 247.68 134.398H217.602V104.32C217.602 99.727 213.875 96 209.281 96H174.719C170.125 96 166.398 99.727 166.398 104.32V134.398H136.32C131.727 134.398 128 138.125 128 142.719V177.281C128 181.875 131.727 185.602 136.32 185.602H166.398V215.68C166.398 220.273 170.125 224 174.719 224H209.281C213.875 224 217.602 220.273 217.602 215.68V185.602H247.68C252.273 185.602 256 181.875 256 177.281ZM148 288H108C101.375 288 96 293.375 96 300V340C96 346.625 101.375 352 108 352H148C154.625 352 160 346.625 160 340V300C160 293.375 154.625 288 148 288ZM148 384H108C101.375 384 96 389.375 96 396V436C96 442.625 101.375 448 108 448H148C154.625 448 160 442.625 160 436V396C160 389.375 154.625 384 148 384ZM320 0H64C28.654 0 0 28.652 0 64V488C0 501.254 10.746 512 24 512S48 501.254 48 488V64C48 55.162 55.164 48 64 48H320C328.836 48 336 55.162 336 64V488C336 501.254 346.746 512 360 512S384 501.254 384 488V64C384 28.652 355.346 0 320 0ZM276 288H236C229.375 288 224 293.375 224 300V340C224 346.625 229.375 352 236 352H276C282.625 352 288 346.625 288 340V300C288 293.375 282.625 288 276 288ZM276 384H236C229.375 384 224 389.375 224 396V436C224 442.625 229.375 448 236 448H276C282.625 448 288 442.625 288 436V396C288 389.375 282.625 384 276 384Z" />
        </Icon>
    </>
}