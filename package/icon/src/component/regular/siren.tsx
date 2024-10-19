
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `siren` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=regular siren}
 * @preview ![siren](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODcuOTM4IDE3Ni4zMTJDMTc1LjEyNSAxNzQuMjE5IDE2Mi41IDE4Mi45NjkgMTYwLjMxMiAxOTYuMDYyTDE0NC4zMTIgMjkyLjA2MkMxNDIuMTU2IDMwNS4xMjUgMTUwLjk2OSAzMTcuNSAxNjQuMDYyIDMxOS42ODhDMTY1LjM3NSAzMTkuOTA2IDE2Ni43MTkgMzIwIDE2OC4wMzEgMzIwQzE3OS41NjMgMzIwIDE4OS43MTkgMzExLjY4OCAxOTEuNjg4IDI5OS45MzhMMjA3LjY4OCAyMDMuOTM4QzIwOS44NDQgMTkwLjg3NSAyMDEuMDMxIDE3OC41IDE4Ny45MzggMTc2LjMxMlpNNDAwLjkzOSAzMzYuMDk0TDM2NC41IDE0MS42NTZDMzU5LjUzMSAxMTUuMTg4IDMzNi4zNzUgOTYgMzA5LjQzOCA5NkgxMzguNTYyQzExMS42MjUgOTYgODguNDY5IDExNS4xODggODMuNSAxNDEuNjg4TDQ3LjA2MiAzMzYuMDk0QzIwLjk5OCAzMzYuNjA1IDAgMzU3LjgxMiAwIDM4NFY0MzJDMCA0NTguNTA4IDIxLjQ5IDQ4MCA0OCA0ODBINDAwQzQyNi41MSA0ODAgNDQ4IDQ1OC41MDggNDQ4IDQzMlYzODRDNDQ4IDM1Ny44MTIgNDI3LjAwNCAzMzYuNjA1IDQwMC45MzkgMzM2LjA5NFpNMTMwLjY4OCAxNTAuNTMxQzEzMS40MDYgMTQ2Ljc1IDEzNC43MTkgMTQ0IDEzOC41NjIgMTQ0SDMwOS40MzhDMzEzLjI4MSAxNDQgMzE2LjU5NCAxNDYuNzUgMzE3LjMxMyAxNTAuNUwzNTIuMDgyIDMzNkg5NS45MkwxMzAuNjg4IDE1MC41MzFaTTQwMCA0MzJINDhWMzg0SDQwMFY0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Siren(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M187.938 176.312C175.125 174.219 162.5 182.969 160.312 196.062L144.312 292.062C142.156 305.125 150.969 317.5 164.062 319.688C165.375 319.906 166.719 320 168.031 320C179.563 320 189.719 311.688 191.688 299.938L207.688 203.938C209.844 190.875 201.031 178.5 187.938 176.312ZM400.939 336.094L364.5 141.656C359.531 115.188 336.375 96 309.438 96H138.562C111.625 96 88.469 115.188 83.5 141.688L47.062 336.094C20.998 336.605 0 357.812 0 384V432C0 458.508 21.49 480 48 480H400C426.51 480 448 458.508 448 432V384C448 357.812 427.004 336.605 400.939 336.094ZM130.688 150.531C131.406 146.75 134.719 144 138.562 144H309.438C313.281 144 316.594 146.75 317.313 150.5L352.082 336H95.92L130.688 150.531ZM400 432H48V384H400V432Z" />
        </Icon>
    </>
}