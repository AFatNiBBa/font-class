
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-half?s=duotone hourglass-half}
 * @preview ![hourglass-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGw2NCAwIDAgMTFjMCAxOSA1LjYgMzcuNCAxNiA1M0wyNzIgMTI4YzEwLjMtMTUuNiAxNi0zNCAxNi01M2wwLTExIDY0IDAgMCAxMWMwIDQyLjQtMTYuOSA4My4xLTQ2LjkgMTEzLjFMMjM3LjMgMjU2bDY3LjkgNjcuOWMzMCAzMCA0Ni45IDcwLjcgNDYuOSAxMTMuMWwwIDExLTQ4IDAtMTYgMEw5NiA0NDhsLTMyIDAtMzIgMCAwLTExYzAtNDIuNCAxNi45LTgzLjEgNDYuOS0xMTMuMUwxNDYuNyAyNTYgNzguOSAxODguMUM0OC45IDE1OC4xIDMyIDExNy40IDMyIDc1bDAtMTF6bTgwIDMyMEwyNzIgMzg0Yy0zLjUtNS4zLTcuNi0xMC4zLTEyLjEtMTQuOUwxOTIgMzAxLjNsLTY3LjkgNjcuOWMtNC42IDQuNi04LjYgOS42LTEyLjEgMTQuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDBDMTQuMyAwIDAgMTQuMyAwIDMyUzE0LjMgNjQgMzIgNjRsMzIwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgMHptMCA0NDhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMzIwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HourglassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l64 0 0 11c0 19 5.6 37.4 16 53L272 128c10.3-15.6 16-34 16-53l0-11 64 0 0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11-48 0-16 0L96 448l-32 0-32 0 0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11zm80 320L272 384c-3.5-5.3-7.6-10.3-12.1-14.9L192 301.3l-67.9 67.9c-4.6 4.6-8.6 9.6-12.1 14.9z" />
            <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default HourglassHalf;