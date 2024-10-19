
import { Icon, generic } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=duotone traffic-cone}
 * @preview ![traffic-cone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04NS43IDM1MmwzNDAuNiAwLTI1LjEtNjQtMjkwLjMgMGMtOC40IDIxLjMtMTYuOCA0Mi43LTI1LjEgNjR6bTYyLjktMTYwbDIxNC45IDAtMjUuMS02NC0xNjQuNiAwYy04LjQgMjEuMy0xNi44IDQyLjctMjUuMSA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3My43IDEyOEwyMTYgMjAuM0MyMjAuOCA4LjEgMjMyLjcgMCAyNDUuOCAwbDIwLjQgMGMxMy4yIDAgMjUgOC4xIDI5LjggMjAuM0wzMzguMyAxMjhsLTE2NC42IDB6bS0yNS4xIDY0bDIxNC45IDAgMzcuNyA5Ni0yOTAuMyAwIDM3LjctOTZ6TTQ4IDQ0OGwzNy43LTk2IDM0MC42IDBMNDY0IDQ0OGwxNiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDMyIDUxMmMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M85.7 352l340.6 0-25.1-64-290.3 0c-8.4 21.3-16.8 42.7-25.1 64zm62.9-160l214.9 0-25.1-64-164.6 0c-8.4 21.3-16.8 42.7-25.1 64z" />
            <path d="M173.7 128L216 20.3C220.8 8.1 232.7 0 245.8 0l20.4 0c13.2 0 25 8.1 29.8 20.3L338.3 128l-164.6 0zm-25.1 64l214.9 0 37.7 96-290.3 0 37.7-96zM48 448l37.7-96 340.6 0L464 448l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0z" />
    </Icon>
);

export default TrafficCone;