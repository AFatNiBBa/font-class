
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caret-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=light caret-down}
 * @preview ![caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuOTYxIDE5MkgzMi4wMTJDMy42NDMgMTkyIC0xMC43MjkgMjI2LjUgOS4zOTIgMjQ2LjYyNUwxMzcuMzY2IDM3NC42MjVDMTQ5Ljg2NCAzODcuMTI1IDE3MC4xMSAzODcuMTI1IDE4Mi42MDcgMzc0LjYyNUwzMTAuNTgxIDI0Ni42MjVDMzMwLjcwMiAyMjYuNSAzMTYuNDU1IDE5MiAyODcuOTYxIDE5MlpNMTU5Ljk4NyAzNTJMMzIuMDEyIDIyNEgyODcuOTYxTDE1OS45ODcgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CaretDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M287.961 192H32.012C3.643 192 -10.729 226.5 9.392 246.625L137.366 374.625C149.864 387.125 170.11 387.125 182.607 374.625L310.581 246.625C330.702 226.5 316.455 192 287.961 192ZM159.987 352L32.012 224H287.961L159.987 352Z" />
        </Icon>
    </>
}