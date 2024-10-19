
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=duotone arrow-left-long}
 * @preview ![arrow-left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03Ny4zIDI1NmMxMC43LTEwLjcgMjEuMy0yMS4zIDMyLTMyTDQ4MCAyMjRjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTM3MC43IDBjLTEwLjctMTAuNy0yMS4zLTIxLjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05LjQgMjc4LjZjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zbDEyOC0xMjhjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBzMTIuNSAzMi44IDAgNDUuM0w3Ny4zIDI1NiAxODIuNiAzNjEuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMGwtMTI4LTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M77.3 256c10.7-10.7 21.3-21.3 32-32L480 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0c-10.7-10.7-21.3-21.3-32-32z" />
            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256 182.6 361.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
    </Icon>
);

export default ArrowLeftLong;