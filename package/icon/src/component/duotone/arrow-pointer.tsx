
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=duotone arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjEuMiAzNDZjNy42LTguNyAxNS4yLTE3LjMgMjIuOC0yNmwzNS44IDAgNTYuOCAxMTMuN2MyLjMgNC42IDMuNCA5LjUgMy40IDE0LjNjMCAxMS43LTYuNSAyMy0xNy43IDI4LjZjLTQuNiAyLjMtOS41IDMuNC0xNC4zIDMuNGMtMTEuNyAwLTIzLTYuNS0yOC42LTE3LjdMMTIxLjIgMzQ2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0MjZWNTUuMkMwIDQyLjQgMTAuNCAzMiAyMy4yIDMyYzUuNyAwIDExLjIgMi4xIDE1LjQgNS45bDI3NCAyNDMuNmM0LjcgNC4yIDcuNCAxMC4yIDcuNCAxNi41YzAgMTIuMi05LjkgMjIuMS0yMi4xIDIyLjFIMTQ0TDM4LjYgNDQwLjVDMzQuNCA0NDUuMyAyOC40IDQ0OCAyMiA0NDhjLTEyLjIgMC0yMi05LjktMjItMjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M121.2 346c7.6-8.7 15.2-17.3 22.8-26l35.8 0 56.8 113.7c2.3 4.6 3.4 9.5 3.4 14.3c0 11.7-6.5 23-17.7 28.6c-4.6 2.3-9.5 3.4-14.3 3.4c-11.7 0-23-6.5-28.6-17.7L121.2 346z" />
            <path d="M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1H144L38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z" />
    </Icon>
);

export default ArrowPointer;