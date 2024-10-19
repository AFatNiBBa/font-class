
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=sharp-duotone-solid arrow-right-long}
 * @preview ![arrow-right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgMzU3LjUgMGMxMC43LTEwLjcgMjEuMy0yMS4zIDMyLTMyYy0xMC43LTEwLjctMjEuMy0yMS4zLTMyLTMyTDMyIDIyNCAwIDIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAyNTZsLTIyLjYtMjIuNi0xMjgtMTI4TDMzOC43IDgyLjcgMjkzLjUgMTI4bDIyLjYgMjIuNkw0MjEuNSAyNTYgMzE2LjEgMzYxLjQgMjkzLjUgMzg0bDQ1LjMgNDUuMyAyMi42LTIyLjYgMTI4LTEyOEw1MTIgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 357.5 0c10.7-10.7 21.3-21.3 32-32c-10.7-10.7-21.3-21.3-32-32L32 224 0 224z" />
            <path d="M512 256l-22.6-22.6-128-128L338.7 82.7 293.5 128l22.6 22.6L421.5 256 316.1 361.4 293.5 384l45.3 45.3 22.6-22.6 128-128L512 256z" />
    </Icon>
);

export default ArrowRightLong;