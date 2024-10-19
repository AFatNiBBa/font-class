
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=light plug}
 * @preview ![plug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgMTZDMzA0IDcuMTY0IDI5Ni44MzYgMCAyODggMFMyNzIgNy4xNjQgMjcyIDE2VjExMkgzMDRWMTZaTTExMiAxNkMxMTIgNy4xNjQgMTA0LjgzNiAwIDk2IDBTODAgNy4xNjQgODAgMTZWMTEySDExMlYxNlpNMzY4IDE0NEgxNkM3LjE2NCAxNDQgMCAxNTEuMTY0IDAgMTYwUzcuMTY0IDE3NiAxNiAxNzZIMzJWMjQwQzMyIDMyMi43NDIgOTUuMzc1IDM5MC4yMTkgMTc2IDM5OC4zODNWNDk2QzE3NiA1MDQuODM2IDE4My4xNjQgNTEyIDE5MiA1MTJTMjA4IDUwNC44MzYgMjA4IDQ5NlYzOTguMzgzQzI4OC42MjUgMzkwLjIxOSAzNTIgMzIyLjc0MiAzNTIgMjQwVjE3NkgzNjhDMzc2LjgzNiAxNzYgMzg0IDE2OC44MzYgMzg0IDE2MFMzNzYuODM2IDE0NCAzNjggMTQ0Wk0zMjAgMjQwQzMyMCAzMTAuNTk0IDI2Mi41NzggMzY4IDE5MiAzNjhTNjQgMzEwLjU5NCA2NCAyNDBWMTc2SDMyMFYyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Plug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M304 16C304 7.164 296.836 0 288 0S272 7.164 272 16V112H304V16ZM112 16C112 7.164 104.836 0 96 0S80 7.164 80 16V112H112V16ZM368 144H16C7.164 144 0 151.164 0 160S7.164 176 16 176H32V240C32 322.742 95.375 390.219 176 398.383V496C176 504.836 183.164 512 192 512S208 504.836 208 496V398.383C288.625 390.219 352 322.742 352 240V176H368C376.836 176 384 168.836 384 160S376.836 144 368 144ZM320 240C320 310.594 262.578 368 192 368S64 310.594 64 240V176H320V240Z" />
        </Icon>
    </>
}