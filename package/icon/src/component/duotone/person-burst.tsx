
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=duotone person-burst}
 * @preview ![person-burst](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00IDIxOS42YzAgMS4yIC4xIDIuNCAuNCAzLjZjMS41IDYuNCA2LjcgMTEuMiAxMy4xIDEyLjJsNzguNyAxMi4yTDkwLjYgMzI3Yy0uNSA2LjUgMy4xIDEyLjcgOSAxNS41czEyLjkgMS44IDE3LjgtMi42TDE3NiAyODYuMWw1OC42IDUzLjljNC44IDQuNCAxMS45IDUuNSAxNy44IDIuNnM5LjUtOSA5LTE1LjVsLTUuNi03OS40IDc4LjctMTIuMmM2LjUtMSAxMS43LTUuOSAxMy4xLTEyLjJjLjMtMS4yIC40LTIuNCAuNC0zLjZjMC01LjItMi41LTEwLjEtNi45LTEzLjJsLTY1LjYtNDUuMUwzMTUgOTIuMmMzLjMtNS43IDIuNy0xMi44LTEuNC0xNy45cy0xMC45LTcuMi0xNy4yLTUuM0wyMjAuMyA5Mi4xbC0yOS40LTc0QzE4OC40IDEyIDE4Mi42IDggMTc2IDhzLTEyLjQgNC0xNC45IDEwLjFsLTI5LjQgNzRMNTUuNiA2OC45Yy02LjMtMS45LTEzLjEgLjItMTcuMiA1LjNzLTQuNiAxMi4yLTEuNCAxNy45bDM5LjUgNjkuMUwxMC45IDIwNi40Yy00LjQgMy02LjkgOC02LjkgMTMuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiA0OGE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxIC05NiAwem00MCAzMDRsMCAxMjhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0yMjMuMS0yOC42IDQ3LjVjLTkuMSAxNS4xLTI4LjggMjAtNDMuOSAxMC45cy0yMC0yOC44LTEwLjktNDMuOWw1OC4zLTk3YzE3LjQtMjguOSA0OC42LTQ2LjYgODIuMy00Ni42bDI5LjcgMGMzMy43IDAgNjQuOSAxNy43IDgyLjMgNDYuNmw1OC4zIDk3YzkuMSAxNS4xIDQuMiAzNC44LTEwLjkgNDMuOXMtMzQuOCA0LjItNDMuOS0xMC45TDU1MiAyNTYuOSA1NTIgNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMTI4LTE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4 219.6c0 1.2 .1 2.4 .4 3.6c1.5 6.4 6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 78.7-12.2c6.5-1 11.7-5.9 13.1-12.2c.3-1.2 .4-2.4 .4-3.6c0-5.2-2.5-10.1-6.9-13.2l-65.6-45.1L315 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-4.4 3-6.9 8-6.9 13.2z" />
            <path d="M432 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1-28.6 47.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L552 256.9 552 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
    </Icon>
);

export default PersonBurst;