
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=light arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00LjY4NyAxNDguNjg4TDE0OC42ODcgNC42ODhDMTUxLjgxMiAxLjU2MiAxNTUuOTA2IDAgMTYwIDBTMTY4LjE4NyAxLjU2MiAxNzEuMzEyIDQuNjg4TDMxNS4zMTIgMTQ4LjY4OEMzMjEuNTYyIDE1NC45MzggMzIxLjU2MiAxNjUuMDYzIDMxNS4zMTIgMTcxLjMxMlMyOTguOTM3IDE3Ny41NjIgMjkyLjY4NyAxNzEuMzEyTDE3NiA1NC42MjVWNDk2QzE3NiA1MDQuODQ0IDE2OC44NDQgNTEyIDE2MCA1MTJTMTQ0IDUwNC44NDQgMTQ0IDQ5NlY1NC42MjVMMjcuMzEyIDE3MS4zMTJDMjEuMDYyIDE3Ny41NjIgMTAuOTM3IDE3Ny41NjIgNC42ODcgMTcxLjMxMlMtMS41NjMgMTU0LjkzOCA0LjY4NyAxNDguNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M4.687 148.688L148.687 4.688C151.812 1.562 155.906 0 160 0S168.187 1.562 171.312 4.688L315.312 148.688C321.562 154.938 321.562 165.063 315.312 171.312S298.937 177.562 292.687 171.312L176 54.625V496C176 504.844 168.844 512 160 512S144 504.844 144 496V54.625L27.312 171.312C21.062 177.562 10.937 177.562 4.687 171.312S-1.563 154.938 4.687 148.688Z" />
        </Icon>
    </>
}