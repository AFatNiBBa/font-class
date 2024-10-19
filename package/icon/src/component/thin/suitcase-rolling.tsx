
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `suitcase-rolling` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-rolling?s=thin suitcase-rolling}
 * @preview ![suitcase-rolling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTI4SDI4OFY0MEMyODggMTcuOTM4IDI3MC4wNjIgMCAyNDggMEgxMzZDMTEzLjkzOCAwIDk2IDE3LjkzOCA5NiA0MFYxMjhINDhDMjEuNDkyIDEyOCAwIDE0OS40OSAwIDE3NlY0MzJDMCA0NTguNTEgMjEuNDkyIDQ4MCA0OCA0ODBINjRDNjQgNDk3LjY0MSA3OC4zNTkgNTEyIDk2IDUxMlMxMjggNDk3LjY0MSAxMjggNDgwSDI1NkMyNTYgNDk3LjY0MSAyNzAuMzU5IDUxMiAyODggNTEyUzMyMCA0OTcuNjQxIDMyMCA0ODBIMzM2QzM2Mi41MDggNDgwIDM4NCA0NTguNTEgMzg0IDQzMlYxNzZDMzg0IDE0OS40OSAzNjIuNTA4IDEyOCAzMzYgMTI4Wk0xMTIgNDBDMTEyIDI2Ljc4MSAxMjIuNzgxIDE2IDEzNiAxNkgyNDhDMjYxLjIxOSAxNiAyNzIgMjYuNzgxIDI3MiA0MFYxMjhIMTEyVjQwWk05NiA0OTZDODcuMTcyIDQ5NiA4MCA0ODguODI4IDgwIDQ4MEgxMTJDMTEyIDQ4OC44MjggMTA0LjgyOCA0OTYgOTYgNDk2Wk0yODggNDk2QzI3OS4xNzIgNDk2IDI3MiA0ODguODI4IDI3MiA0ODBIMzA0QzMwNCA0ODguODI4IDI5Ni44MjggNDk2IDI4OCA0OTZaTTM2OCA0MzJDMzY4IDQ0OS42NDUgMzUzLjY0NSA0NjQgMzM2IDQ2NEg0OEMzMC4zNTUgNDY0IDE2IDQ0OS42NDUgMTYgNDMyVjE3NkMxNiAxNTguMzU1IDMwLjM1NSAxNDQgNDggMTQ0SDMzNkMzNTMuNjQ1IDE0NCAzNjggMTU4LjM1NSAzNjggMTc2VjQzMlpNMzEyIDM1Mkg3MkM2Ny41NzggMzUyIDY0IDM1NS41NzggNjQgMzYwUzY3LjU3OCAzNjggNzIgMzY4SDMxMkMzMTYuNDIyIDM2OCAzMjAgMzY0LjQyMiAzMjAgMzYwUzMxNi40MjIgMzUyIDMxMiAzNTJaTTMxMiAyMjRINzJDNjcuNTc4IDIyNCA2NCAyMjcuNTc4IDY0IDIzMlM2Ny41NzggMjQwIDcyIDI0MEgzMTJDMzE2LjQyMiAyNDAgMzIwIDIzNi40MjIgMzIwIDIzMlMzMTYuNDIyIDIyNCAzMTIgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SuitcaseRolling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 128H288V40C288 17.938 270.062 0 248 0H136C113.938 0 96 17.938 96 40V128H48C21.492 128 0 149.49 0 176V432C0 458.51 21.492 480 48 480H64C64 497.641 78.359 512 96 512S128 497.641 128 480H256C256 497.641 270.359 512 288 512S320 497.641 320 480H336C362.508 480 384 458.51 384 432V176C384 149.49 362.508 128 336 128ZM112 40C112 26.781 122.781 16 136 16H248C261.219 16 272 26.781 272 40V128H112V40ZM96 496C87.172 496 80 488.828 80 480H112C112 488.828 104.828 496 96 496ZM288 496C279.172 496 272 488.828 272 480H304C304 488.828 296.828 496 288 496ZM368 432C368 449.645 353.645 464 336 464H48C30.355 464 16 449.645 16 432V176C16 158.355 30.355 144 48 144H336C353.645 144 368 158.355 368 176V432ZM312 352H72C67.578 352 64 355.578 64 360S67.578 368 72 368H312C316.422 368 320 364.422 320 360S316.422 352 312 352ZM312 224H72C67.578 224 64 227.578 64 232S67.578 240 72 240H312C316.422 240 320 236.422 320 232S316.422 224 312 224Z" />
        </Icon>
    </>
}