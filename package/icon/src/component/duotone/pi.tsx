
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pi` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=duotone pi}
 * @preview ![pi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NEMxNC4zIDY0IDAgNzguMyAwIDk2czE0LjMgMzIgMzIgMzJsNjQgMCAwIDE1NmMwIDM5LjctOS4zIDc4LjktMjcgMTE0LjVsLTEuNiAzLjJjLTcuOSAxNS44LTEuNSAzNSAxNC4zIDQyLjlzMzUgMS41IDQyLjktMTQuM2wxLjYtMy4yQzE0OC40IDM4Mi43IDE2MCAzMzMuNyAxNjAgMjg0bDAtMTU2IDEyOCAwIDAgMjM4LjZjMCA0NSAzNi41IDgxLjQgODEuNCA4MS40YzMwLjggMCA1OS0xNy40IDcyLjgtNDVsMi4zLTQuN2M3LjktMTUuOCAxLjUtMzUtMTQuMy00Mi45cy0zNS0xLjUtNDIuOSAxNC4zbC0yLjMgNC43Yy0zIDUuOS05IDkuNi0xNS42IDkuNmMtOS42IDAtMTcuNC03LjgtMTcuNC0xNy40TDM1MiAxMjhsNjQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkwzMiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l64 0 0 156c0 39.7-9.3 78.9-27 114.5l-1.6 3.2c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l1.6-3.2C148.4 382.7 160 333.7 160 284l0-156 128 0 0 238.6c0 45 36.5 81.4 81.4 81.4c30.8 0 59-17.4 72.8-45l2.3-4.7c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-2.3 4.7c-3 5.9-9 9.6-15.6 9.6c-9.6 0-17.4-7.8-17.4-17.4L352 128l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 64z" />
    </Icon>
);

export default Pi;