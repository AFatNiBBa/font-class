
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-arrow-down?s=sharp-duotone-solid display-arrow-down}
 * @preview ![display-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA0MTZsMjQwIDAgOTYgMCAyNDAgMEw1NzYgMCAzMTIgMGwwIDI0IDAgNDAgMjAwIDAgMCAyODhMNjQgMzUyIDY0IDY0bDIwMCAwIDAtNDAgMC0yNEwwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNjQgNjRMNjQgNjRsMCAyODggNDQ4IDAgMC0yODhMMzEyIDY0bDAgMTM0LjEgMzktMzkgMTctMTdMNDAxLjkgMTc2bC0xNyAxNy04MCA4MC0xNyAxNy0xNy0xNy04MC04MC0xNy0xN0wyMDggMTQyLjFsMTcgMTcgMzkgMzlMMjY0IDY0em04Mi43IDM4NEwzMzYgNDE2bC05NiAwLTEwLjcgMzJMMTYwIDQ0OGwtMzIgMCAwIDY0IDMyIDAgMjU2IDAgMzIgMCAwLTY0LTMyIDAtNjkuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DisplayArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 416l240 0 96 0 240 0L576 0 312 0l0 24 0 40 200 0 0 288L64 352 64 64l200 0 0-40 0-24L0 0z" />
            <path d="M264 64L64 64l0 288 448 0 0-288L312 64l0 134.1 39-39 17-17L401.9 176l-17 17-80 80-17 17-17-17-80-80-17-17L208 142.1l17 17 39 39L264 64zm82.7 384L336 416l-96 0-10.7 32L160 448l-32 0 0 64 32 0 256 0 32 0 0-64-32 0-69.3 0z" />
    </Icon>
);

export default DisplayArrowDown;