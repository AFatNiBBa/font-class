
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `blog` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=regular blog}
 * @preview ![blog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYuOTk4IDAuMDhDMjA0LjA0NSAtMS4wNDUgMTkyLjU3NiA5Ljc5OCAxOTIuMDE0IDIzLjA0N0MxOTEuNDY3IDM2LjI5NiAyMDEuNzQ4IDQ3LjQ4MiAyMTQuOTk4IDQ4LjAxM0MzNDYuNzkzIDUzLjU0NCA0NTguNTExIDE2NS4yNTIgNDY0LjAxMSAyOTcuMDIxQzQ2NC41NTggMzA5LjkyNiA0NzUuMTgzIDMyMC4wMTggNDg3Ljk3OSAzMjAuMDE4QzQ4OC4zMDcgMzIwLjAxOCA0ODguNjUxIDMyMC4wMTggNDg4Ljk5NSAzMTkuOTg3QzUwMi4yNDUgMzE5LjQ1NiA1MTIuNTI2IDMwOC4yNyA1MTEuOTc5IDI5NS4wMjFDNTA1LjQ0OCAxMzguOTExIDM3My4xMjEgNi42MTEgMjE2Ljk5OCAwLjA4Wk0yMTcuNTYgOTYuMTAyQzIwNC42MDcgOTUuNDc3IDE5Mi45MDQgMTA1LjI1OCAxOTIuMDQ1IDExOC40NzVTMjAxLjIxNyAxNDMuMTI5IDIxNC40MzUgMTQzLjk3M0MyOTMuOTY2IDE0OS4xNiAzNjIuODcxIDIxOC4wNTkgMzY4LjA0MyAyOTcuNTgzQzM2OC44NzEgMzEwLjI2OSAzNzkuNDM0IDMyMC4wMTggMzkxLjk4IDMyMC4wMThDMzkyLjQ5NiAzMjAuMDE4IDM5My4wMjcgMzE5Ljk4NyAzOTMuNTU4IDMxOS45NTZDNDA2Ljc3NyAzMTkuMTEyIDQxNi44MDggMzA3LjY3NiA0MTUuOTQ5IDI5NC40NThDNDA5LjI2MSAxOTEuNzQ5IDMyMC4yNjIgMTAyLjc1OCAyMTcuNTYgOTYuMTAyWk0xNDMuOTk5IDIyNC4wMjhIMTE5Ljk5OUMxMDYuNzQ5IDIyNC4wMjggOTUuOTk5IDIzNC43NzcgOTUuOTk5IDI0OC4wMjVDOTUuOTk5IDI2MS4yNzQgMTA2Ljc0OSAyNzIuMDIzIDExOS45OTkgMjcyLjAyM0gxNDMuOTk5QzE5Ni45MzUgMjcyLjAyMyAyMzkuOTk4IDMxNS4wODEgMjM5Ljk5OCAzNjguMDE0UzE5Ni45MzUgNDY0LjAwNSAxNDMuOTk5IDQ2NC4wMDVTNDggNDIwLjk0NiA0OCAzNjguMDE0VjEyMC4wMzhDNDggMTA2Ljc4OSAzNy4yNSA5Ni4wNCAyNCA5Ni4wNFMwIDEwNi43ODkgMCAxMjAuMDM4VjM2OC4wMTRDMCA0NDcuNDEyIDY0LjU5MyA1MTIgMTQzLjk5OSA1MTJTMjg3Ljk5NyA0NDcuNDEyIDI4Ny45OTcgMzY4LjAxNFMyMjMuNDA0IDIyNC4wMjggMTQzLjk5OSAyMjQuMDI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Blog(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M216.998 0.08C204.045 -1.045 192.576 9.798 192.014 23.047C191.467 36.296 201.748 47.482 214.998 48.013C346.793 53.544 458.511 165.252 464.011 297.021C464.558 309.926 475.183 320.018 487.979 320.018C488.307 320.018 488.651 320.018 488.995 319.987C502.245 319.456 512.526 308.27 511.979 295.021C505.448 138.911 373.121 6.611 216.998 0.08ZM217.56 96.102C204.607 95.477 192.904 105.258 192.045 118.475S201.217 143.129 214.435 143.973C293.966 149.16 362.871 218.059 368.043 297.583C368.871 310.269 379.434 320.018 391.98 320.018C392.496 320.018 393.027 319.987 393.558 319.956C406.777 319.112 416.808 307.676 415.949 294.458C409.261 191.749 320.262 102.758 217.56 96.102ZM143.999 224.028H119.999C106.749 224.028 95.999 234.777 95.999 248.025C95.999 261.274 106.749 272.023 119.999 272.023H143.999C196.935 272.023 239.998 315.081 239.998 368.014S196.935 464.005 143.999 464.005S48 420.946 48 368.014V120.038C48 106.789 37.25 96.04 24 96.04S0 106.789 0 120.038V368.014C0 447.412 64.593 512 143.999 512S287.997 447.412 287.997 368.014S223.404 224.028 143.999 224.028Z" />
        </Icon>
    </>
}