
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=regular monument}
 * @preview ![monument](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgNDY0SDMzMy45OTlMMjg5LjEyNSAxMDAuNzVDMjg4LjM3NSA5My4zNzUgMjg1LjEyNSA4Ni41IDI3OS44NzUgODEuMjVMMjAzLjI1IDQuNzVDMjAwLjM3NSAxLjYyNSAxOTYuMjUgMCAxOTIgMEMxODcuODc1IDAgMTgzLjc1IDEuNSAxODAuNzUgNC43NUwxMDQuMTI1IDgxLjI1Qzk4Ljg3NSA4Ni41IDk1LjYyNSA5My4zNzUgOTQuODc1IDEwMC43NUw0OS45OTkgNDY0SDI0QzEwLjc0NSA0NjQgMCA0NzQuNzQ1IDAgNDg4VjQ4OEMwIDUwMS4yNTUgMTAuNzQ1IDUxMiAyNCA1MTJIMzYwQzM3My4yNTUgNTEyIDM4NCA1MDEuMjU1IDM4NCA0ODhWNDg4QzM4NCA0NzQuNzQ1IDM3My4yNTUgNDY0IDM2MCA0NjRaTTk4LjM3NSA0NjRMMTQxLjg3NSAxMTEuMzc1TDE5MiA2MS4yNUwyNDIuMTI1IDExMS4zNzVMMjg1LjYyNSA0NjRIOTguMzc1Wk0yMTYgMjcySDE2OEMxNTQuOCAyNzIgMTQ0IDI4Mi44IDE0NCAyOTZWMjk2QzE0NCAzMDkuMiAxNTQuOCAzMjAgMTY4IDMyMEgyMTZDMjI5LjIgMzIwIDI0MCAzMDkuMiAyNDAgMjk2VjI5NkMyNDAgMjgyLjggMjI5LjIgMjcyIDIxNiAyNzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Monument(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M360 464H333.999L289.125 100.75C288.375 93.375 285.125 86.5 279.875 81.25L203.25 4.75C200.375 1.625 196.25 0 192 0C187.875 0 183.75 1.5 180.75 4.75L104.125 81.25C98.875 86.5 95.625 93.375 94.875 100.75L49.999 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H360C373.255 512 384 501.255 384 488V488C384 474.745 373.255 464 360 464ZM98.375 464L141.875 111.375L192 61.25L242.125 111.375L285.625 464H98.375ZM216 272H168C154.8 272 144 282.8 144 296V296C144 309.2 154.8 320 168 320H216C229.2 320 240 309.2 240 296V296C240 282.8 229.2 272 216 272Z" />
        </Icon>
    </>
}