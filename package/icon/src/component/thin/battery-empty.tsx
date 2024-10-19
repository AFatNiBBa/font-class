
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=thin battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgMTEyYy0zNS4zIDAtNjQgMjguNy02NCA2NGwwIDE2MGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzNjggMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTE2IDAtMTYgMC05NiAwLTE2IDAtMTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMODAgMTEyek01MjggMzIwbDAgMTZjMCA0NC4yLTM1LjggODAtODAgODBMODAgNDE2Yy00NC4yIDAtODAtMzUuOC04MC04MEwwIDE3NmMwLTQ0LjIgMzUuOC04MCA4MC04MGwzNjggMGM0NC4yIDAgODAgMzUuOCA4MCA4MGwwIDE2IDE2IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMmwtMTYgMHptMC0xMTJsMCA5NiAxNiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTY0YzAtOC44LTcuMi0xNi0xNi0xNmwtMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 112c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l368 0c35.3 0 64-28.7 64-64l0-16 0-16 0-96 0-16 0-16c0-35.3-28.7-64-64-64L80 112zM528 320l0 16c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l368 0c44.2 0 80 35.8 80 80l0 16 16 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-16 0zm0-112l0 96 16 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0z" />
    </Icon>
);

export default BatteryEmpty;