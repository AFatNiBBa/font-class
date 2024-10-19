
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=regular sort-up}
 * @preview ![sort-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OC4wMzQgMjA5LjkzM0gyNzEuOTJDMzE0LjU0NyAyMDkuOTMzIDMzNi4xNzMgMTU4LjE2OCAzMDUuNzk3IDEyOC4wMzRMMTkzLjkxNiAxNkMxNzUuMjkgLTIuNzU2IDE0NC43ODkgLTIuNzU2IDEyNi4wMzggMTZMMTQuMDMzIDEyOC4wMzRDLTE1Ljk2OSAxNTguMTY4IDUuMjgyIDIwOS45MzMgNDguMDM0IDIwOS45MzNaTTE2MC4wNCA0OS44ODVMMjcyLjA0NSAxNjEuOTE5SDQ4LjAzNEwxNjAuMDQgNDkuODg1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SortUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M48.034 209.933H271.92C314.547 209.933 336.173 158.168 305.797 128.034L193.916 16C175.29 -2.756 144.789 -2.756 126.038 16L14.033 128.034C-15.969 158.168 5.282 209.933 48.034 209.933ZM160.04 49.885L272.045 161.919H48.034L160.04 49.885Z" />
        </Icon>
    </>
}