
import { Icon, generic } from "../../index";

/**
 * A component that renders the `couch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=duotone couch}
 * @preview ![couch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxNjBsMCA2Ni43YzE4LjYgNi42IDMyIDI0LjQgMzIgNDUuM2wwIDgwIDQ0OCAwIDAtODBjMC0uNyAwLTEuMyAwLTEuOXMuMS0xLjMgLjEtMS45Yy4xLTEuMyAuMy0yLjUgLjUtMy44Yy40LTIuNSAxLTQuOSAxLjgtNy4zYzEuNS00LjcgMy44LTkuMSA2LjYtMTNjNS43LTcuOSAxMy43LTE0IDIzLTE3LjNsMC02Ni43YzAtNzAuNy01Ny4zLTEyOC0xMjgtMTI4TDE5MiAzMkMxMjEuMyAzMiA2NCA4OS4zIDY0IDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4IDIyNGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhMMCA0NDhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMmw0NDggMGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTc2YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4cy00OCAyMS41LTQ4IDQ4bDAgODBMOTYgMzUybDAtODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 66.7c18.6 6.6 32 24.4 32 45.3l0 80 448 0 0-80c0-.7 0-1.3 0-1.9s.1-1.3 .1-1.9c.1-1.3 .3-2.5 .5-3.8c.4-2.5 1-4.9 1.8-7.3c1.5-4.7 3.8-9.1 6.6-13c5.7-7.9 13.7-14 23-17.3l0-66.7c0-70.7-57.3-128-128-128L192 32C121.3 32 64 89.3 64 160z" />
            <path d="M48 224c-26.5 0-48 21.5-48 48L0 448c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l448 0c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-176c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80L96 352l0-80c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default Couch;