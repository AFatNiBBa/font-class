
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=duotone boot}
 * @preview ![boot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDMyMCAwIDAgNjQtNDggMGMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNmw0OCAwIDAgMzItNDggMGMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNmw0OCAwIDExOS4zIDI5LjhDNDgyIDI5Ni41IDUxMiAzMzQuOSA1MTIgMzc5bDAgNjlMMCA0NDggMCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDBDMTQuMyAwIDAgMTQuMyAwIDMyTDAgOTZsMzIwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMkwzMiAwek0wIDQ0OGwwIDkuNGMwIDE0LjUgNS44IDI4LjQgMTYgMzguNnMyNC4xIDE2IDM4LjYgMTZsMTQuOSAwYzE3IDAgMzMuMy02LjcgNDUuMy0xOC43bDcuNi03LjZjMy4xLTMuMSA4LjItMy4xIDExLjMgMGw3LjYgNy42YzEyIDEyIDI4LjMgMTguNyA0NS4zIDE4LjdsMTEgMGMxNyAwIDMzLjMtNi43IDQ1LjMtMTguN2w3LjYtNy42YzMuMS0zLjEgOC4yLTMuMSAxMS4zIDBsNy42IDcuNmMxMiAxMiAyOC4zIDE4LjcgNDUuMyAxOC43bDExIDBjMTcgMCAzMy4zLTYuNyA0NS4zLTE4LjdsNy42LTcuNmMzLjEtMy4xIDguMi0zLjEgMTEuMyAwbDcuNiA3LjZjMTIgMTIgMjguMyAxOC43IDQ1LjMgMTguN2wxNC45IDBjMTQuNSAwIDI4LjQtNS44IDM4LjYtMTZzMTYtMjQuMSAxNi0zOC42bDAtOS40TDAgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l320 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 119.3 29.8C482 296.5 512 334.9 512 379l0 69L0 448 0 96z" />
            <path d="M32 0C14.3 0 0 14.3 0 32L0 96l320 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0zM0 448l0 9.4c0 14.5 5.8 28.4 16 38.6s24.1 16 38.6 16l14.9 0c17 0 33.3-6.7 45.3-18.7l7.6-7.6c3.1-3.1 8.2-3.1 11.3 0l7.6 7.6c12 12 28.3 18.7 45.3 18.7l11 0c17 0 33.3-6.7 45.3-18.7l7.6-7.6c3.1-3.1 8.2-3.1 11.3 0l7.6 7.6c12 12 28.3 18.7 45.3 18.7l11 0c17 0 33.3-6.7 45.3-18.7l7.6-7.6c3.1-3.1 8.2-3.1 11.3 0l7.6 7.6c12 12 28.3 18.7 45.3 18.7l14.9 0c14.5 0 28.4-5.8 38.6-16s16-24.1 16-38.6l0-9.4L0 448z" />
    </Icon>
);

export default Boot;