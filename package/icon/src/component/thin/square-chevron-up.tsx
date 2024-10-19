
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-chevron-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-up?s=thin square-chevron-up}
 * @preview ![square-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTcuODQ0IDMwOS4zNDRMMjI0IDE5NS42MDlMMzMwLjE1NiAzMDkuMzQ0QzMzMS43MTkgMzExLjAzMSAzMzMuODc1IDMxMS44OTEgMzM2IDMxMS44OTFDMzM3Ljk2OSAzMTEuODkxIDMzOS45MDYgMzExLjE3MiAzNDEuNDY5IDMwOS43MzRDMzQ0LjY4NyAzMDYuNzE5IDM0NC44NzUgMzAxLjY1NiAzNDEuODQ0IDI5OC40MzhMMjI5Ljg0NCAxNzguNDM4QzIyNi44NDQgMTc1LjE4OCAyMjEuMTU2IDE3NS4xODggMjE4LjE1NiAxNzguNDM4TDEwNi4xNTYgMjk4LjQzOEMxMDMuMTI1IDMwMS42NTYgMTAzLjMxMiAzMDYuNzE5IDEwNi41MzEgMzA5LjczNEMxMDkuNzgxIDMxMi43MzQgMTE0LjgxMiAzMTIuNTk0IDExNy44NDQgMzA5LjM0NFpNNjQgNDgwSDM4NEM0MTkuMzQ0IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NCAzMiAzODQgMzJINjRDMjguNjUyIDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTIgNDgwIDY0IDQ4MFpNMTYgOTZDMTYgNjkuNTMzIDM3LjUzMSA0OCA2NCA0OEgzODRDNDEwLjQ2OSA0OCA0MzIgNjkuNTMzIDQzMiA5NlY0MTZDNDMyIDQ0Mi40NjcgNDEwLjQ2OSA0NjQgMzg0IDQ2NEg2NEMzNy41MzEgNDY0IDE2IDQ0Mi40NjcgMTYgNDE2Vjk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M117.844 309.344L224 195.609L330.156 309.344C331.719 311.031 333.875 311.891 336 311.891C337.969 311.891 339.906 311.172 341.469 309.734C344.687 306.719 344.875 301.656 341.844 298.438L229.844 178.438C226.844 175.188 221.156 175.188 218.156 178.438L106.156 298.438C103.125 301.656 103.312 306.719 106.531 309.734C109.781 312.734 114.812 312.594 117.844 309.344ZM64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480ZM16 96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96Z" />
        </Icon>
    </>
}