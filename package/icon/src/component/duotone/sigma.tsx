
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sigma` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=duotone sigma}
 * @preview ![sigma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjQgNTEuOEM3LjQgMzkuOCAxOS4xIDMyIDMyIDMybDI4OCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zMkwxMDkuMyA5NiAyNDYuNiAyMzMuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM0wxMDkuMyA0MTYgMzIwIDQxNmwwLTMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAzMmMwIDM1LjMtMjguNyA2NC02NCA2NEwzMiA0ODBjLTEyLjkgMC0yNC42LTcuOC0yOS42LTE5LjhzLTIuMi0yNS43IDYuOS0zNC45TDE3OC43IDI1NiA5LjQgODYuNkMuMiA3Ny41LTIuNSA2My43IDIuNCA1MS44eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M2.4 51.8C7.4 39.8 19.1 32 32 32l288 0c35.3 0 64 28.7 64 64l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L109.3 96 246.6 233.4c12.5 12.5 12.5 32.8 0 45.3L109.3 416 320 416l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 35.3-28.7 64-64 64L32 480c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L178.7 256 9.4 86.6C.2 77.5-2.5 63.7 2.4 51.8z" />
    </Icon>
);

export default Sigma;