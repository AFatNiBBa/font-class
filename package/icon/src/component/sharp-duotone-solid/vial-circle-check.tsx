
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=sharp-duotone-solid vial-circle-check}
 * @preview ![vial-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsMzIgMCAwIDI4OGMwIDUzIDQzIDk2IDk2IDk2YzMyLjYgMCA2MS41LTE2LjMgNzguOC00MS4yQzE5Ny4zIDQxNy4xIDE5MiAzOTMuMiAxOTIgMzY4YzAtMzcuNyAxMS44LTcyLjYgMzItMTAxLjJMMjI0IDk2bDMyIDAgMC02NC0zMiAwLTY0IDBMOTYgMzIgMzIgMzIgMCAzMnpNOTYgOTZsNjQgMCAwIDk2LTY0IDAgMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2OCA1MTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4em02Ny4zLTE2NC43bC03MiA3MkwzNTIgNDMwLjZsLTExLjMtMTEuMy00MC00MEwyODkuNCAzNjggMzEyIDM0NS40bDExLjMgMTEuM0wzNTIgMzg1LjRsNjAuNy02MC43TDQyNCAzMTMuNCA0NDYuNiAzMzZsLTExLjMgMTEuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 0 288c0 53 43 96 96 96c32.6 0 61.5-16.3 78.8-41.2C197.3 417.1 192 393.2 192 368c0-37.7 11.8-72.6 32-101.2L224 96l32 0 0-64-32 0-64 0L96 32 32 32 0 32zM96 96l64 0 0 96-64 0 0-96z" />
            <path d="M368 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L352 430.6l-11.3-11.3-40-40L289.4 368 312 345.4l11.3 11.3L352 385.4l60.7-60.7L424 313.4 446.6 336l-11.3 11.3z" />
    </Icon>
);

export default VialCircleCheck;