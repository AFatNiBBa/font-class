
import { Icon, generic } from "../../index";

/**
 * A component that renders the `split` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=duotone split}
 * @preview ![split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjUuNSAyODhjMjUuNSAwIDQ5LjktMTAuMSA2Ny45LTI4LjFjMS4zLTEuMyAyLjYtMi42IDMuOS0zLjlsODYuNiA4Ni42YzYgNiAxNC4xIDkuNCAyMi42IDkuNGwzNy41IDAgMC0zMmMwLTEyLjkgNy44LTI0LjYgMTkuOC0yOS42czI1LjctMi4yIDM0LjkgNi45bDY0IDY0YzYgNiA5LjQgMTQuMSA5LjQgMjIuNnMtMy40IDE2LjYtOS40IDIyLjZsLTY0IDY0Yy02LjEgNi4xLTE0LjMgOS40LTIyLjYgOS40Yy00LjEgMC04LjMtLjgtMTIuMi0yLjRjLTEyLTUtMTkuOC0xNi42LTE5LjgtMjkuNmwwLTMyLTM3LjUgMGMtMjUuNSAwLTQ5LjktMTAuMS02Ny45LTI4LjFsLTkwLjUtOTAuNWMtNi02LTE0LjEtOS40LTIyLjYtOS40eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDM4LjYgNDEuNGMtOS4yLTkuMi0yMi45LTExLjktMzQuOS02LjlzLTE5LjggMTYuNi0xOS44IDI5LjZsMCAzMi0zNy41IDBjLTI1LjUgMC00OS45IDEwLjEtNjcuOSAyOC4xbC05MC41IDkwLjVjLTYgNi0xNC4xIDkuNC0yMi42IDkuNEwzMiAyMjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMTMzLjUgMGMyNS41IDAgNDkuOS0xMC4xIDY3LjktMjguMWw5MC41LTkwLjVjNi02IDE0LjEtOS40IDIyLjYtOS40bDM3LjUgMCAwIDMyYzAgMTIuOSA3LjggMjQuNiAxOS44IDI5LjZzMjUuNyAyLjIgMzQuOS02LjlsNjQtNjRjNi02IDkuNC0xNC4xIDkuNC0yMi42cy0zLjQtMTYuNi05LjQtMjIuNmwtNjQtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Split: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M165.5 288c25.5 0 49.9-10.1 67.9-28.1c1.3-1.3 2.6-2.6 3.9-3.9l86.6 86.6c6 6 14.1 9.4 22.6 9.4l37.5 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-6.1 6.1-14.3 9.4-22.6 9.4c-4.1 0-8.3-.8-12.2-2.4c-12-5-19.8-16.6-19.8-29.6l0-32-37.5 0c-25.5 0-49.9-10.1-67.9-28.1l-90.5-90.5c-6-6-14.1-9.4-22.6-9.4z" />
            <path d="M438.6 41.4c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-37.5 0c-25.5 0-49.9 10.1-67.9 28.1l-90.5 90.5c-6 6-14.1 9.4-22.6 9.4L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l133.5 0c25.5 0 49.9-10.1 67.9-28.1l90.5-90.5c6-6 14.1-9.4 22.6-9.4l37.5 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64z" />
    </Icon>
);

export default Split;