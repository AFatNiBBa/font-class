
import { Icon, generic } from "../../index";

/**
 * A component that renders the `frame` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=duotone frame}
 * @preview ![frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgMzIgMCA2NCAwIDE5Mi02NCAwIDAtMTkyIDAtNjQgMC0zMnptMCAzNTJsNjQgMCAwIDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMzJ6TTMyMCA2NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgMzItNjQgMCAwLTMyem0wIDk2bDY0IDAgMCAxOTIgMCA2NCAwIDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMzIgMC02NCAwLTE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxNiA5NmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMjg4IDAgMC02NCAyODggMHpNMzIgOTZsMzIgMCAwIDY0LTMyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJ6bTAgMzIwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDI4OCAwIDAgNjRMMzIgNDE2em0zODQgMGwtMzIgMCAwLTY0IDMyIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 0 64 0 192-64 0 0-192 0-64 0-32zm0 352l64 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32zM320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32-64 0 0-32zm0 96l64 0 0 192 0 64 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32 0-64 0-192z" />
            <path d="M416 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0 0-64 288 0zM32 96l32 0 0 64-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0 0 64L32 416zm384 0l-32 0 0-64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </Icon>
);

export default Frame;