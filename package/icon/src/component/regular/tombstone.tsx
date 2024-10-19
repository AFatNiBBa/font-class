
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=regular tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTUuOTcxIDE1OS45OTJMMjQ3Ljk3MSAxNTkuOTk4TDI0Ny45NjcgMTE5Ljk5OEMyNDcuOTY1IDEwNi43NDIgMjM3LjIxOSA5NS45OTggMjIzLjk2NSA5NkMyMTAuNzA5IDk2IDE5OS45NjUgMTA2Ljc0NiAxOTkuOTY3IDEyMC4wMDJMMTk5Ljk3MSAxNjAuMDAyTDE1MS45NzEgMTYwLjAwNkMxMzguNzE1IDE2MC4wMDggMTI3Ljk3MSAxNzAuNzU0IDEyNy45NzMgMTg0LjAwOEMxMjcuOTczIDE5Ny4yNjQgMTM4LjcxOSAyMDguMDA4IDE1MS45NzUgMjA4LjAwNkwxOTkuOTc1IDIwOC4wMDJMMTk5Ljk4NiAzMjguMDAyQzE5OS45ODYgMzQxLjI1NiAyMTAuNzMyIDM1MiAyMjMuOTg4IDM1MkMyMzcuMjQyIDM1MS45OTggMjQ3Ljk4NiAzNDEuMjUyIDI0Ny45ODYgMzI3Ljk5OEwyNDcuOTc1IDIwNy45OThMMjk1Ljk3NSAyMDcuOTkyQzMwOS4yMjkgMjA3Ljk5MiAzMTkuOTczIDE5Ny4yNDYgMzE5Ljk3MyAxODMuOTlDMzE5Ljk3MSAxNzAuNzM2IDMwOS4yMjUgMTU5Ljk5MiAyOTUuOTcxIDE1OS45OTJaTTQyNCA0NjRINDE2LjAxNkw0MTUuOTk0IDE5MS45NzNDNDE1Ljk4NCA4NS45NzkgMzI5Ljk3NSAtMC4wMSAyMjMuOTc3IDBDMTE3Ljk3NSAwLjAxIDMxLjk4NCA4Ni4wMTQgMzEuOTk0IDE5Mi4wMDhMMzIuMDE2IDQ2NEgyNEMxMC43NDYgNDY0IDAgNDc0Ljc0NCAwIDQ4OEMwIDUwMS4yNTQgMTAuNzQ2IDUxMiAyNCA1MTJINDI0QzQzNy4yNTQgNTEyIDQ0OCA1MDEuMjU0IDQ0OCA0ODhDNDQ4IDQ3NC43NDQgNDM3LjI1NCA0NjQgNDI0IDQ2NFpNODAuMDE2IDQ2NEw3OS45OTQgMTkyLjAwNEM3OS45ODYgMTEyLjYzMyAxNDQuNjA1IDQ4LjAwNiAyMjMuOTggNDcuOTk4UzM2Ny45ODYgMTEyLjYwNSAzNjcuOTk0IDE5MS45NzdMMzY4LjAxNiA0NjRIODAuMDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tombstone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M295.971 159.992L247.971 159.998L247.967 119.998C247.965 106.742 237.219 95.998 223.965 96C210.709 96 199.965 106.746 199.967 120.002L199.971 160.002L151.971 160.006C138.715 160.008 127.971 170.754 127.973 184.008C127.973 197.264 138.719 208.008 151.975 208.006L199.975 208.002L199.986 328.002C199.986 341.256 210.732 352 223.988 352C237.242 351.998 247.986 341.252 247.986 327.998L247.975 207.998L295.975 207.992C309.229 207.992 319.973 197.246 319.973 183.99C319.971 170.736 309.225 159.992 295.971 159.992ZM424 464H416.016L415.994 191.973C415.984 85.979 329.975 -0.01 223.977 0C117.975 0.01 31.984 86.014 31.994 192.008L32.016 464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H424C437.254 512 448 501.254 448 488C448 474.744 437.254 464 424 464ZM80.016 464L79.994 192.004C79.986 112.633 144.605 48.006 223.98 47.998S367.986 112.605 367.994 191.977L368.016 464H80.016Z" />
        </Icon>
    </>
}