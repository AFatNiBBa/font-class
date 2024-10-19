
import { Icon, generic } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=duotone play-pause}
 * @preview ![play-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgOTZsMCAzMjBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptMTI4IDBsMCAzMjBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTExNi41IDcxLjRjLTkuNS03LjktMjIuOC05LjctMzQuMS00LjRTNjQgODMuNiA2NCA5NmwwIDMyMGMwIDEyLjQgNy4yIDIzLjcgMTguNCAyOXMyNC41IDMuNiAzNC4xLTQuNGwxOTItMTYwYzcuMy02LjEgMTEuNS0xNS4xIDExLjUtMjQuNnMtNC4yLTE4LjUtMTEuNS0yNC42bC0xOTItMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 0l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96l0 320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6l-192-160z" />
    </Icon>
);

export default PlayPause;