
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bluetooth-b` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth-b?s=brands bluetooth-b}
 * @preview ![bluetooth-b](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTYuNDggMjYwLjAyM2w5Mi42MjYtMTAzLjMzM0wxNDMuMTI1IDB2MjA2LjMzbC04Ni4xMTEtODYuMTExLTMxLjQwNiAzMS40MDUgMTA4LjA2MSAxMDguMzk5TDI1LjYwOCAzNjguNDIybDMxLjQwNiAzMS40MDUgODYuMTExLTg2LjExMUwxNDUuODQgNTEybDE0OC41NTItMTQ4LjY0NC05Ny45MTItMTAzLjMzM3ptNDAuODYtMTAyLjk5NmwtNDkuOTc3IDQ5Ljk3OC0uMzM4LTEwMC4yOTUgNTAuMzE1IDUwLjMxN3pNMTg3LjM2MyAzMTMuMDRsNDkuOTc3IDQ5Ljk3OC01MC4zMTUgNTAuMzE2LjMzOC0xMDAuMjk0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BluetoothB(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z" />
        </Icon>
    </>
}