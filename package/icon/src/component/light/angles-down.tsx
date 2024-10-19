
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angles-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angles-down?s=light angles-down}
 * @preview ![angles-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODEuMjgyIDI1MS44OThDMTg3LjQwNyAyNTcuMzY3IDE5Ni41OTQgMjU3LjM2NyAyMDIuNzE5IDI1MS44OThMMzYyLjcxIDEwNy44ODhDMzY5LjI3MiAxMDEuOTgyIDM2OS44MDMgOTEuODU3IDM2My44OTcgODUuMjk1QzM1Ny45NiA3OC43NDYgMzQ3Ljg2NiA3OC4yMyAzNDEuMjcyIDg0LjEwN0wxOTIuMDAxIDIxOC40NzRMNDIuNzI5IDg0LjEwN0MzNi40OTkgNzguNTExIDI2LjM3NiA3OC4zNzcgMjAuMTA0IDg1LjI5NUMxNC4xOTggOTEuODU3IDE0LjcyOSAxMDEuOTgyIDIxLjI5MiAxMDcuODg4TDE4MS4yODIgMjUxLjg5OFpNMzQxLjI3MiAyNzYuMTA3TDE5Mi4wMDEgNDEwLjQ3NEw0Mi43MjkgMjc2LjEwN0MzNi40OTkgMjcwLjUxMiAyNi4zNzYgMjcwLjM3NyAyMC4xMDQgMjc3LjI5NUMxNC4xOTggMjgzLjg1NyAxNC43MjkgMjkzLjk4MiAyMS4yOTIgMjk5Ljg4OEwxODEuMjgyIDQ0My44OThDMTg3LjQwNyA0NDkuMzY3IDE5Ni41OTQgNDQ5LjM2NyAyMDIuNzE5IDQ0My44OThMMzYyLjcxIDI5OS44ODhDMzY5LjI3MiAyOTMuOTgyIDM2OS44MDMgMjgzLjg1NyAzNjMuODk3IDI3Ny4yOTVDMzU3Ljk2IDI3MC43NDYgMzQ3Ljg2NiAyNzAuMjMgMzQxLjI3MiAyNzYuMTA3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AnglesDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M181.282 251.898C187.407 257.367 196.594 257.367 202.719 251.898L362.71 107.888C369.272 101.982 369.803 91.857 363.897 85.295C357.96 78.746 347.866 78.23 341.272 84.107L192.001 218.474L42.729 84.107C36.499 78.511 26.376 78.377 20.104 85.295C14.198 91.857 14.729 101.982 21.292 107.888L181.282 251.898ZM341.272 276.107L192.001 410.474L42.729 276.107C36.499 270.512 26.376 270.377 20.104 277.295C14.198 283.857 14.729 293.982 21.292 299.888L181.282 443.898C187.407 449.367 196.594 449.367 202.719 443.898L362.71 299.888C369.272 293.982 369.803 283.857 363.897 277.295C357.96 270.746 347.866 270.23 341.272 276.107Z" />
        </Icon>
    </>
}