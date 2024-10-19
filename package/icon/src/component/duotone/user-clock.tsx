
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=duotone user-clock}
 * @preview ![user-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0bDkxLjQgMGMyMC42IDAgNDAuNCAzLjUgNTguOCA5LjlDMzIzIDMzMSAzMjAgMzQ5LjEgMzIwIDM2OGMwIDU5LjUgMjkuNSAxMTIuMSA3NC44IDE0NEwyOS43IDUxMkMxMy4zIDUxMiAwIDQ5OC43IDAgNDgyLjN6TTM1MiAxMjhBMTI4IDEyOCAwIDEgMSA5NiAxMjhhMTI4IDEyOCAwIDEgMSAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ5NiA1MTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4em0xNi0yMDhsMCA0OCAzMiAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC00OCAwYy04LjggMC0xNi03LjItMTYtMTZsMC02NGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default UserClock;