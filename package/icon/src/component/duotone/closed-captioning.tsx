
import { Icon, generic } from "../../index";

/**
 * A component that renders the `closed-captioning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=duotone closed-captioning}
 * @preview ![closed-captioning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDQ0OCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzIwYzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA5NnpNMTA0IDI1NmMwIDUzIDQzIDk2IDk2IDk2YzI4LjQgMCA1NC0xMi40IDcxLjUtMzJjOC44LTkuOSA4LTI1LTEuOS0zMy45cy0yNS04LTMzLjkgMS45Yy04LjggOS45LTIxLjYgMTYtMzUuOCAxNmMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OGMxNC4yIDAgMjcgNi4xIDM1LjggMTZjOC44IDkuOSAyNCAxMC43IDMzLjkgMS45czEwLjctMjQgMS45LTMzLjljLTE3LjUtMTkuNi00My4xLTMyLTcxLjUtMzJjLTUzIDAtOTYgNDMtOTYgOTZ6bTE5MiAwYzAgNTMgNDMgOTYgOTYgOTZjMjguNCAwIDU0LTEyLjQgNzEuNS0zMmM4LjgtOS45IDgtMjUtMS45LTMzLjlzLTI1LTgtMzMuOSAxLjljLTguOCA5LjktMjEuNiAxNi0zNS44IDE2Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4YzE0LjIgMCAyNyA2LjEgMzUuOCAxNmM4LjggOS45IDI0IDEwLjcgMzMuOSAxLjlzMTAuNy0yNCAxLjktMzMuOWMtMTcuNS0xOS42LTQzLjEtMzItNzEuNS0zMmMtNTMgMC05NiA0My05NiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE1MiAyNTZjMC0yNi41IDIxLjUtNDggNDgtNDhjMTQuMiAwIDI3IDYuMSAzNS44IDE2YzguOCA5LjkgMjQgMTAuNyAzMy45IDEuOXMxMC43LTI0IDEuOS0zMy45Yy0xNy41LTE5LjYtNDMuMS0zMi03MS41LTMyYy01MyAwLTk2IDQzLTk2IDk2czQzIDk2IDk2IDk2YzI4LjQgMCA1NC0xMi40IDcxLjUtMzJjOC44LTkuOSA4LTI1LTEuOS0zMy45cy0yNS04LTMzLjkgMS45Yy04LjggOS45LTIxLjYgMTYtMzUuOCAxNmMtMjYuNSAwLTQ4LTIxLjUtNDgtNDh6bTE5MiAwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4YzE0LjIgMCAyNyA2LjEgMzUuOCAxNmM4LjggOS45IDI0IDEwLjcgMzMuOSAxLjlzMTAuNy0yNCAxLjktMzMuOWMtMTcuNS0xOS42LTQzLjEtMzItNzEuNS0zMmMtNTMgMC05NiA0My05NiA5NnM0MyA5NiA5NiA5NmMyOC40IDAgNTQtMTIuNCA3MS41LTMyYzguOC05LjkgOC0yNS0xLjktMzMuOXMtMjUtOC0zMy45IDEuOWMtOC44IDkuOS0yMS42IDE2LTM1LjggMTZjLTI2LjUgMC00OC0yMS41LTQ4LTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClosedCaptioning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM104 256c0 53 43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96zm192 0c0 53 43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96z" />
            <path d="M152 256c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48zm192 0c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default ClosedCaptioning;