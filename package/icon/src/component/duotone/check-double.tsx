
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check-double` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=duotone check-double}
 * @preview ![check-double](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxNDRjMCA4LjIgMy4xIDE2LjQgOS40IDIyLjZsODAgODBjNi4yIDYuMiAxNC40IDkuNCAyMi42IDkuNHMxNi40LTMuMSAyMi42LTkuNGwxNjAtMTYwYzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zQzMzNi40IDM1LjEgMzI4LjIgMzIgMzIwIDMycy0xNi40IDMuMS0yMi42IDkuNEwxNjAgMTc4LjdsLTU3LjQtNTcuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBDNTEuMSAxMjcuNiA0OCAxMzUuOCA0OCAxNDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MzguNiAxNjkuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM2wtMjU2IDI1NmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBsLTEyOC0xMjhjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zczMyLjgtMTIuNSA0NS4zIDBMMTYwIDQwMi43IDM5My40IDE2OS40YzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 144c0 8.2 3.1 16.4 9.4 22.6l80 80c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l160-160c12.5-12.5 12.5-32.8 0-45.3C336.4 35.1 328.2 32 320 32s-16.4 3.1-22.6 9.4L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0C51.1 127.6 48 135.8 48 144z" />
            <path d="M438.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 393.4 169.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default CheckDouble;