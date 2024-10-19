
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=duotone hourglass-start}
 * @preview ![hourglass-start](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGwzMiAwIDMyIDAgMTkyIDAgMzIgMCAzMiAwIDAgMTFjMCA0Mi40LTE2LjkgODMuMS00Ni45IDExMy4xTDIzNy4zIDI1Nmw2Ny45IDY3LjljMzAgMzAgNDYuOSA3MC43IDQ2LjkgMTEzLjFsMCAxMS02NCAwIDAtMTFjMC0yNS41LTEwLjEtNDkuOS0yOC4xLTY3LjlMMTkyIDMwMS4zbC02Ny45IDY3LjljLTE4IDE4LTI4LjEgNDIuNC0yOC4xIDY3LjlsMCAxMS02NCAwIDAtMTFjMC00Mi40IDE2LjktODMuMSA0Ni45LTExMy4xTDE0Ni43IDI1NiA3OC45IDE4OC4xQzQ4LjkgMTU4LjEgMzIgMTE3LjQgMzIgNzVsMC0xMXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDBDMTQuMyAwIDAgMTQuMyAwIDMyUzE0LjMgNjQgMzIgNjRsMzIwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgMHptMCA0NDhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMzIwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l32 0 32 0 192 0 32 0 32 0 0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11-64 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11-64 0 0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11z" />
            <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default HourglassStart;